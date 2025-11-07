<template>
  <div class="min-h-screen relative overflow-hidden flex items-center justify-center">
    <!-- Animated gradient background -->
    <div class="animated-gradient"></div>
    
    <!-- Floating shapes -->
    <div class="floating-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="shape shape-4"></div>
      <div class="shape shape-5"></div>
    </div>
    
    <!-- Content -->
    <div class="content-wrapper z-10 text-center px-4">
      <h1 class="main-title">
        Project 1
      </h1>
      <p class="subtitle">
        Building a Secure and Scalable VPC Architecture
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Animated gradient background */
.animated-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    #667eea 0%,
    #764ba2 25%,
    #f093fb 50%,
    #4facfe 75%,
    #667eea 100%
  );
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  z-index: 0;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Floating shapes */
.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  animation: float 20s infinite ease-in-out;
}

.shape-1 {
  width: 300px;
  height: 300px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
  animation-duration: 25s;
}

.shape-2 {
  width: 200px;
  height: 200px;
  top: 60%;
  left: 70%;
  animation-delay: 2s;
  animation-duration: 20s;
}

.shape-3 {
  width: 150px;
  height: 150px;
  top: 30%;
  left: 80%;
  animation-delay: 4s;
  animation-duration: 18s;
}

.shape-4 {
  width: 250px;
  height: 250px;
  top: 70%;
  left: 20%;
  animation-delay: 1s;
  animation-duration: 22s;
}

.shape-5 {
  width: 180px;
  height: 180px;
  top: 20%;
  left: 50%;
  animation-delay: 3s;
  animation-duration: 24s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(30px, -30px) rotate(90deg);
  }
  50% {
    transform: translate(-20px, 20px) rotate(180deg);
  }
  75% {
    transform: translate(40px, 10px) rotate(270deg);
  }
}

/* Content styling */
.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.main-title {
  font-size: clamp(3rem, 10vw, 8rem);
  font-weight: 900;
  color: white;
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
  animation: slideInFade 1.2s ease-out forwards;
  opacity: 0;
}

.subtitle {
  font-size: clamp(1rem, 3vw, 1.5rem);
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  font-weight: 300;
  letter-spacing: 0.05em;
  animation: slideInFade 1.2s ease-out 0.3s forwards;
  opacity: 0;
  max-width: 800px;
  margin: 0 auto;
}

@keyframes slideInFade {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .shape {
    opacity: 0.5;
  }
  
  .shape-1 {
    width: 200px;
    height: 200px;
  }
  
  .shape-2 {
    width: 150px;
    height: 150px;
  }
  
  .shape-3 {
    width: 100px;
    height: 100px;
  }
  
  .shape-4 {
    width: 180px;
    height: 180px;
  }
  
  .shape-5 {
    width: 120px;
    height: 120px;
  }
  
  .main-title {
    margin-bottom: 1rem;
  }
}

@media (max-width: 480px) {
  .content-wrapper {
    padding: 0 1rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
}
</style>
