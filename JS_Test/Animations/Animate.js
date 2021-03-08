const animate = () => {
  // Animation code
  // ...
  // At end of animation, request another one
  animationId = requestAnimationFrame(animate);
};

// Animation start
let animationId = requestAnimationFrame(animate);
