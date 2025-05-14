// saveToJson.js

const fs = require('fs');


const animations = [
  { name: 'Bounce', desc: 'Bounces the element up and down.', key: 'bounce' },
  { name: 'Flash', desc: 'Quick flashes to grab attention.', key: 'flash' },
  { name: 'Pulse', desc: 'Smooth pulsing like a heartbeat.', key: 'pulse' },
  { name: 'Swing', desc: 'Swings side to side like a pendulum.', key: 'swing' },
  { name: 'Heartbeat', desc: 'Strong pulsing like a heartbeat.', key: 'heartbeat' },
  { name: 'Rubberband', desc: 'Stretches and snaps like elastic.', key: 'rubberband' },
  { name: 'Wobble', desc: 'Wobbles side to side with twist.', key: 'wobble' },
  { name: 'Jello', desc: 'Wobbly jello-like bounce using skew transforms.', key: 'jello' },
  { name: 'Hinge', desc: 'Smoothly swings down like a door, then drops.', key: 'hinge' },
  { name: 'Jack In The Box', desc: 'Playfully pops in with spring and rotation.', key: 'jackInTheBox' },
  { name: 'Roll In', desc: 'Smoothly rolls in while rotating and fading.', key: 'rollIn' },
  { name: 'Roll Out', desc: 'Quickly rolls out with spin and fade.', key: 'rollOut' },
  { name: 'Slide In Down', desc: 'Slides smoothly from top to bottom with fade.', key: 'slideInDown' },
  { name: 'Slide In Up', desc: 'Slides smoothly from bottom to top with fade.', key: 'slideInUp' },
  { name: 'Slide In Left', desc: 'Slides smoothly from left to right with fade.', key: 'slideInLeft' },
  { name: 'Slide In Right', desc: 'Slides smoothly from right to left with fade.', key: 'slideInRight' },
  { name: 'Slide Out Down', desc: 'Slides smoothly downward and fades out to bottom.', key: 'slideOutDown' },
  { name: 'Slide Out Up', desc: 'Slides smoothly upward and fades out to top.', key: 'slideOutUp' },
  { name: 'Slide Out Left', desc: 'Slides smoothly leftward and fades out to left.', key: 'slideOutLeft' },
  { name: 'Slide Out Right', desc: 'Slides smoothly rightward and fades out to right.', key: 'slideOutRight' },
  { name: 'Lightspeed In Left', desc: 'Skewed slide-in from left with fade effect.', key: 'lightspeedInLeft' },
  { name: 'Lightspeed In Right', desc: 'Skewed slide-in from right with fade-in.', key: 'lightspeedInRight' },
  { name: 'Lightspeed Out Left', desc: 'Skewed slide-out to left with fast fade out.', key: 'lightspeedOutLeft' },
  { name: 'Lightspeed Out Right', desc: 'Skewed slide-out to right with easy fade out.', key: 'lightspeedOutRight' },
  { name: 'Shake X', desc: 'Shakes left and right rapidly.', key: 'shakeX' },
  { name: 'Shake Y', desc: 'Shakes up and down vertically.', key: 'shakeY' },
  { name: 'FadeIn', desc: 'Smooth fade-in from invisible.', key: 'fadeIn' },
  { name: 'FadeIn Up', desc: 'Fades in while moving upward.', key: 'fadeInUp' },
  { name: 'FadeIn Down', desc: 'Fades in while moving downward.', key: 'fadeInDown' },
  { name: 'FadeIn Left', desc: 'Fades in while sliding from left.', key: 'fadeInLeft' },
  { name: 'FadeIn Right', desc: 'Fades in while sliding from right.', key: 'fadeInRight' },
  { name: 'FadeIn Top Left', desc: 'Fades in from top-left corner.', key: 'fadeInTopLeft' },
  { name: 'FadeIn Top Right', desc: 'Fades in from top-right corner.', key: 'fadeInTopRight' },
  { name: 'FadeIn Bottom Left', desc: 'Fades in from bottom-left corner.', key: 'fadeInBottomLeft' },
  { name: 'FadeIn Bottom Right', desc: 'Fades in from bottom-right corner.', key: 'fadeInBottomRight' },
  { name: 'Fade Out', desc: 'Fades out without movement.', key: 'fadeOut' },
  { name: 'Fade Out Up', desc: 'Fades out while moving up.', key: 'fadeOutUp' },
  { name: 'Fade Out Down', desc: 'Fades out while moving down.', key: 'fadeOutDown' },
  { name: 'Fade Out Left', desc: 'Fades out while sliding left.', key: 'fadeOutLeft' },
  { name: 'Fade Out Right', desc: 'Fades out while sliding right.', key: 'fadeOutRight' },
  { name: 'Flip', desc: 'Performs a smooth 180° 3D flip along the Y-axis.', key: 'flip' },
  { name: 'Flip In X', desc: 'Flips in vertically with 3D rotate and fade effect.', key: 'flipInX' },
  { name: 'Flip In Y', desc: 'Flips in from horizontal axis, giving rotating card effect.', key: 'flipInY' },
  { name: 'Flip Out X', desc: 'Flips out vertically with fading, creating a vertical exit.', key: 'flipOutX' },
  { name: 'Flip Out Y', desc: 'Flips out horizontally, spinning away with fade out.', key: 'flipOutY' }
];


// Convert to JSON string (pretty format)
const jsonData = JSON.stringify(animations, null, 2);

// Write to content.json
fs.writeFileSync('content.json', jsonData, 'utf8');

console.log('✅ animations array saved to content.json!');
