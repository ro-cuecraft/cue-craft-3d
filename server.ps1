# Native PowerShell Lightweight Static HTTP Web Server
# Purpose: Serve Three.js 3D billiard game files locally with correct MIME types for ES Modules

$port = 8080
$localDir = $PSScriptRoot
if (-not $localDir) { $localDir = Get-Location }

# Initialize HTTP Listener
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
    Write-Host "=========================================" -ForegroundColor Yellow
    Write-Host " CUE CRAFT 3D - Native PowerShell Server" -ForegroundColor Yellow
    Write-Host " Serving files from: $localDir" -ForegroundColor Cyan
    Write-Host " Listening on: http://localhost:$port/" -ForegroundColor Green
    Write-Host " Press Ctrl+C in this terminal to stop server." -ForegroundColor Yellow
    Write-Host "=========================================" -ForegroundColor Yellow
} catch {
    Write-Host "Failed to start listener: $_" -ForegroundColor Red
    Exit 1
}

# Request handler loop
while ($listener.IsListening) {
    $context = $null
    $response = $null
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $urlPath = $request.Url.LocalPath
        # Default index.html
        if ($urlPath -eq "/") { $urlPath = "/index.html" }
        
        # Translate to local physical path
        $cleanPath = $urlPath.Replace("/", "\").TrimStart("\")
        $filePath = Join-Path $localDir $cleanPath
        
        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            
            # Match standard MIME type for ES Modules
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = "text/plain"
            
            if ($ext -eq ".html") { $contentType = "text/html; charset=utf-8" }
            elseif ($ext -eq ".css") { $contentType = "text/css; charset=utf-8" }
            elseif ($ext -eq ".js") { $contentType = "application/javascript; charset=utf-8" }
            elseif ($ext -eq ".json") { $contentType = "application/json; charset=utf-8" }
            elseif ($ext -eq ".png") { $contentType = "image/png" }
            elseif ($ext -eq ".jpg" -or $ext -eq ".jpeg") { $contentType = "image/jpeg" }
            elseif ($ext -eq ".svg") { $contentType = "image/svg+xml" }
            elseif ($ext -eq ".ico") { $contentType = "image/x-icon" }
            
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            
            # CORS headers to make local testing perfectly smooth
            $response.AddHeader("Access-Control-Allow-Origin", "*")
            $response.AddHeader("Cache-Control", "no-cache, no-store, must-revalidate")
            
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            # File Not Found
            $response.StatusCode = 404
            $errorMsg = "404 Not Found: The requested resource '$urlPath' does not exist."
            $errorBytes = [System.Text.Encoding]::UTF8.GetBytes($errorMsg)
            $response.ContentType = "text/plain; charset=utf-8"
            $response.ContentLength64 = $errorBytes.Length
            $response.OutputStream.Write($errorBytes, 0, $errorBytes.Length)
        }
    } catch {
        # Silent fail or write log
        if ($_ -match "The I/O operation has been aborted") {
            # Standard client closed connection
        } else {
            Write-Host "Request Handling Error: $_" -ForegroundColor DarkYellow
        }
    } finally {
        if ($response) {
            try { $response.Close() } catch {}
        }
    }
}
