import sys

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

with open('app.js', 'r', encoding='utf-8') as f:
    js = f.read()

# 1. Viewport Update
old_meta = '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">'
new_meta = '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">'
html = html.replace(old_meta, new_meta)

# 2. Resize Logic Update (Add orientationchange)
old_resize = "window.addEventListener('resize',onResize);"
new_resize = "window.addEventListener('resize',onResize);\n    window.addEventListener('orientationchange', () => setTimeout(onResize, 100));"
js = js.replace(old_resize, new_resize)

# 3. Touch Event Mapping (spinCircle)
old_spin = """spinCircle.addEventListener('mousedown',e=>{dragging=true;updateSpin(e.clientX,e.clientY);e.preventDefault();});
  window.addEventListener('mousemove',e=>{if(dragging)updateSpin(e.clientX,e.clientY);});
  window.addEventListener('mouseup',()=>{dragging=false;});
  spinCircle.addEventListener('touchstart',e=>{dragging=true;updateSpin(e.touches[0].clientX,e.touches[0].clientY);e.preventDefault();},{passive:false});
  window.addEventListener('touchmove',e=>{if(dragging&&e.target===spinCircle)updateSpin(e.touches[0].clientX,e.touches[0].clientY);},{passive:false});
  window.addEventListener('touchend',()=>{dragging=false;});"""

new_spin = """spinCircle.addEventListener('mousedown',e=>{dragging=true;updateSpin(e.clientX,e.clientY);e.preventDefault();});
  window.addEventListener('mousemove',e=>{if(dragging){updateSpin(e.clientX,e.clientY);e.preventDefault();}},{passive:false});
  window.addEventListener('mouseup',()=>{dragging=false;});
  spinCircle.addEventListener('touchstart',e=>{dragging=true;updateSpin(e.touches[0].clientX,e.touches[0].clientY);e.preventDefault();},{passive:false});
  window.addEventListener('touchmove',e=>{if(dragging){updateSpin(e.touches[0].clientX,e.touches[0].clientY);e.preventDefault();}},{passive:false});
  window.addEventListener('touchend',()=>{dragging=false;});"""

js = js.replace(old_spin, new_spin)

# 3b. Touch Event Mapping (drawer handle)
old_drawer = """handle.addEventListener('touchstart',e=>{startY=e.touches[0].clientY;drawerDragging=true;e.preventDefault();},{passive:false});
  window.addEventListener('touchmove',e=>{
    if(!drawerDragging)return;const dy=startY-e.touches[0].clientY;
    drawer.style.transform=`translateY(${Math.max(0,100-dy)}%)`;
  },{passive:false});
  window.addEventListener('touchend',()=>{drawerDragging=false;});"""

new_drawer = """handle.addEventListener('mousedown',e=>{startY=e.clientY;drawerDragging=true;e.preventDefault();});
  window.addEventListener('mousemove',e=>{
    if(!drawerDragging)return;const dy=startY-e.clientY;
    drawer.style.transform=`translateY(${Math.max(0,100-dy)}%)`;
    e.preventDefault();
  },{passive:false});
  window.addEventListener('mouseup',()=>{drawerDragging=false;});

  handle.addEventListener('touchstart',e=>{startY=e.touches[0].clientY;drawerDragging=true;e.preventDefault();},{passive:false});
  window.addEventListener('touchmove',e=>{
    if(!drawerDragging)return;const dy=startY-e.touches[0].clientY;
    drawer.style.transform=`translateY(${Math.max(0,100-dy)}%)`;
    e.preventDefault();
  },{passive:false});
  window.addEventListener('touchend',()=>{drawerDragging=false;});"""

js = js.replace(old_drawer, new_drawer)

# Combine
import re
html = re.sub(r'<link rel="stylesheet" href="style\.css\?v=\d+">', f"<style>\n{css}\n</style>", html)
html = re.sub(r'<script src="app\.js\?v=\d+"></script>', f"<script>\n{js}\n</script>", html)

with open('CUE_CRAFT_3D_MOBILE.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Done")
