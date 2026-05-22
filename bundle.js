const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');
let css = fs.readFileSync('style.css', 'utf8');
let js = fs.readFileSync('app.js', 'utf8');

// 1. Viewport Update
html = html.replace(
    '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">',
    '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">'
);

// 2. Resize Logic Update (Add orientationchange)
js = js.replace(
    "window.addEventListener('resize',onResize);",
    "window.addEventListener('resize',onResize);\n    window.addEventListener('orientationchange', () => setTimeout(onResize, 100));"
);

// 3. Touch Event Mapping (spinCircle)
const oldSpinMouse = `spinCircle.addEventListener('mousedown',e=>{dragging=true;updateSpin(e.clientX,e.clientY);e.preventDefault();});
  window.addEventListener('mousemove',e=>{if(dragging)updateSpin(e.clientX,e.clientY);});
  window.addEventListener('mouseup',()=>{dragging=false;});
  spinCircle.addEventListener('touchstart',e=>{dragging=true;updateSpin(e.touches[0].clientX,e.touches[0].clientY);e.preventDefault();},{passive:false});
  window.addEventListener('touchmove',e=>{if(dragging&&e.target===spinCircle)updateSpin(e.touches[0].clientX,e.touches[0].clientY);},{passive:false});
  window.addEventListener('touchend',()=>{dragging=false;});`;

const newSpinMouse = `spinCircle.addEventListener('mousedown',e=>{dragging=true;updateSpin(e.clientX,e.clientY);e.preventDefault();});
  window.addEventListener('mousemove',e=>{if(dragging){updateSpin(e.clientX,e.clientY);e.preventDefault();}},{passive:false});
  window.addEventListener('mouseup',()=>{dragging=false;});
  
  spinCircle.addEventListener('touchstart',e=>{dragging=true;updateSpin(e.touches[0].clientX,e.touches[0].clientY);e.preventDefault();},{passive:false});
  window.addEventListener('touchmove',e=>{if(dragging){updateSpin(e.touches[0].clientX,e.touches[0].clientY);e.preventDefault();}},{passive:false});
  window.addEventListener('touchend',()=>{dragging=false;});`;

js = js.replace(oldSpinMouse, newSpinMouse);

// 3b. Touch Event Mapping (drawer handle)
const oldDrawerTouch = `handle.addEventListener('touchstart',e=>{startY=e.touches[0].clientY;drawerDragging=true;e.preventDefault();},{passive:false});
  window.addEventListener('touchmove',e=>{
    if(!drawerDragging)return;const dy=startY-e.touches[0].clientY;
    drawer.style.transform=\`translateY(\${Math.max(0,100-dy)}%)\`;
  },{passive:false});
  window.addEventListener('touchend',()=>{drawerDragging=false;});`;

const newDrawerTouch = `handle.addEventListener('mousedown',e=>{startY=e.clientY;drawerDragging=true;e.preventDefault();});
  window.addEventListener('mousemove',e=>{
    if(!drawerDragging)return;const dy=startY-e.clientY;
    drawer.style.transform=\`translateY(\${Math.max(0,100-dy)}%)\`;
    e.preventDefault();
  },{passive:false});
  window.addEventListener('mouseup',()=>{drawerDragging=false;});

  handle.addEventListener('touchstart',e=>{startY=e.touches[0].clientY;drawerDragging=true;e.preventDefault();},{passive:false});
  window.addEventListener('touchmove',e=>{
    if(!drawerDragging)return;const dy=startY-e.touches[0].clientY;
    drawer.style.transform=\`translateY(\${Math.max(0,100-dy)}%)\`;
    e.preventDefault();
  },{passive:false});
  window.addEventListener('touchend',()=>{drawerDragging=false;});`;

js = js.replace(oldDrawerTouch, newDrawerTouch);

// Merge HTML, CSS, JS
html = html.replace(/<link rel="stylesheet" href="style\.css\?v=\d+">/, \`<style>\n\${css}\n</style>\`);
html = html.replace(/<script src="app\.js\?v=\d+"><\/script>/, \`<script>\n\${js}\n</script>\`);

fs.writeFileSync('CUE_CRAFT_3D_MOBILE.html', html);
console.log('Successfully generated CUE_CRAFT_3D_MOBILE.html!');
