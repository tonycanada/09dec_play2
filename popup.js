// popup.js
// Gaming Dice Loading Modal for PlayMo Gaming Platform
// Shows every time - No cookies stored

class PlayOnModal {
    constructor() {
        // Configuration - SET YOUR REDIRECT URL HERE
        
        this.redirectUrl = 'https://playon-wal3.onrender.com'; // Change this to your actual redirect URL
        this.modal = null;
        this.isLoading = false;
        
        this.init();
    }

    init() {
        // Always show modal (no cookie check)
        this.createModal();
        this.showModal();
        this.bindEvents();
        this.startLoadingAnimation();
    }

    createModal() {
        // Create modal container
        this.modal = document.createElement('div');
        this.modal.className = 'playon-modal';
        this.modal.innerHTML = `
            <div class="playon-modal__overlay"></div>
            <div class="playon-modal__content">
                <div class="playon-modal__header">
                    <div class="playon-modal__loading-container">
                        <!-- PLAY + Dice + MO Logo -->
                        <div class="logo-container">
                            <span class="logo-text logo-text--play">PLAY</span>
                            <div class="dice-loading">
                                <div class="dice-3d">
                                    <!-- Front face with dots -->
                                    <div class="dice-face dice-face--front">
                                        <div class="dice-dots">
                                            <span class="dot"></span>
                                        </div>
                                    </div>
                                    <!-- Back face with dots -->
                                    <div class="dice-face dice-face--back">
                                        <div class="dice-dots">
                                            <span class="dot"></span>
                                            <span class="dot"></span>
                                            <span class="dot"></span>
                                            <span class="dot"></span>
                                            <span class="dot"></span>
                                            <span class="dot"></span>
                                        </div>
                                    </div>
                                    <!-- Top face -->
                                    <div class="dice-face dice-face--top">
                                        <div class="dice-dots">
                                            <span class="dot"></span>
                                            <span class="dot"></span>
                                            <span class="dot"></span>
                                        </div>
                                    </div>
                                    <!-- Bottom face -->
                                    <div class="dice-face dice-face--bottom">
                                        <div class="dice-dots">
                                            <span class="dot"></span>
                                            <span class="dot"></span>
                                            <span class="dot"></span>
                                            <span class="dot"></span>
                                        </div>
                                    </div>
                                    <!-- Left face -->
                                    <div class="dice-face dice-face--left">
                                        <div class="dice-dots">
                                            <span class="dot"></span>
                                            <span class="dot"></span>
                                        </div>
                                    </div>
                                    <!-- Right face -->
                                    <div class="dice-face dice-face--right">
                                        <div class="dice-dots">
                                            <span class="dot"></span>
                                            <span class="dot"></span>
                                            <span class="dot"></span>
                                            <span class="dot"></span>
                                            <span class="dot"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span class="logo-text logo-text--mo">MO</span>
                        </div>
                        
                        <div class="loading-bar">
                            <div class="loading-progress"></div>
                        </div>
                    </div>
                    
                    <h2 class="playon-modal__title">Get Ready to Roll!</h2>
                    <p class="playon-modal__subtitle">Your gaming adventure starts in seconds</p>
                </div>

                <div class="playon-modal__body">
                    <div class="playon-modal__features">
                        <div class="playon-modal__feature">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <circle cx="10" cy="10" r="7" fill="#dc2626"/>
                                <path d="M8 10L10.5 12.5L14 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>Instant Access to Games</span>
                        </div>
                        <div class="playon-modal__feature">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <circle cx="10" cy="10" r="7" fill="#dc2626"/>
                                <path d="M8 10L10.5 12.5L14 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>Real-time Multiplayer</span>
                        </div>
                        <div class="playon-modal__feature">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <circle cx="10" cy="10" r="7" fill="#dc2626"/>
                                <path d="M8 10L10.5 12.5L14 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>Win Exciting Rewards</span>
                        </div>
                    </div>
                </div>

                <div class="playon-modal__footer">
                    <button class="playon-modal__button" autofocus>
                        🎮 Start Playing Now
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(this.modal);

        // Add CSS styles
        this.addStyles();
    }

    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .playon-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 9999;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
                display: none;
            }

            .playon-modal__overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(15, 23, 42, 0.65);
                backdrop-filter: blur(8px);
                animation: fadeIn 0.3s ease;
            }

            .playon-modal__content {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: white;
                border-radius: clamp(0.75rem, 2.5vw, 1rem);
                padding: clamp(1.25rem, 4vw, 1.75rem);
                width: min(90vw, 20rem);
                max-height: 90vh;
                overflow: hidden;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                border: 1px solid rgba(229, 231, 235, 0.5);
                animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            }

            .playon-modal__header {
                text-align: center;
                margin-bottom: 1.25rem;
            }

            .playon-modal__loading-container {
                margin-bottom: 1rem;
            }

            .logo-container {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.4rem;
                margin-bottom: 1rem;
            }

            .logo-text {
                font-size: clamp(28px, 7vw, 38px);
                font-weight: 900;
                font-family: 'Arial Black', sans-serif;
                letter-spacing: 1px;
                text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
            }

            .logo-text--play {
                color: #1f2937;
            }

            .logo-text--mo {
                color: #dc2626;
            }

            .dice-loading {
                position: relative;
                width: clamp(45px, 10vw, 55px);
                height: clamp(45px, 10vw, 55px);
                perspective: 1000px;
                flex-shrink: 0;
            }

            .dice-3d {
                position: relative;
                width: 100%;
                height: 100%;
                transform-style: preserve-3d;
                animation: diceRotate 4s ease-in-out infinite;
            }

            .dice-face {
                position: absolute;
                width: 100%;
                height: 100%;
                background: linear-gradient(145deg, #dc2626, #b91c1c);
                border: 2px solid #991b1b;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 
                    inset 0 0 15px rgba(0, 0, 0, 0.3),
                    0 4px 12px rgba(220, 38, 38, 0.4);
            }

            .dice-face--front {
                transform: translateZ(calc(clamp(45px, 10vw, 55px) / 2));
            }

            .dice-face--back {
                transform: rotateY(180deg) translateZ(calc(clamp(45px, 10vw, 55px) / 2));
            }

            .dice-face--top {
                transform: rotateX(90deg) translateZ(calc(clamp(45px, 10vw, 55px) / 2));
            }

            .dice-face--bottom {
                transform: rotateX(-90deg) translateZ(calc(clamp(45px, 10vw, 55px) / 2));
            }

            .dice-face--left {
                transform: rotateY(-90deg) translateZ(calc(clamp(45px, 10vw, 55px) / 2));
            }

            .dice-face--right {
                transform: rotateY(90deg) translateZ(calc(clamp(45px, 10vw, 55px) / 2));
            }

            .dice-dots {
                display: grid;
                width: 80%;
                height: 80%;
                padding: 5px;
                gap: 4px;
            }

            .dice-face--front .dice-dots {
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                place-items: center;
            }

            .dice-face--back .dice-dots {
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: repeat(2, 1fr);
            }

            .dice-face--top .dice-dots {
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: 1fr;
            }

            .dice-face--bottom .dice-dots {
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: repeat(2, 1fr);
            }

            .dice-face--left .dice-dots {
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: 1fr;
            }

            .dice-face--right .dice-dots {
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: repeat(3, 1fr);
            }

            .dot {
                width: clamp(7px, 2vw, 9px);
                height: clamp(7px, 2vw, 9px);
                background: white;
                border-radius: 50%;
                box-shadow: 
                    0 1px 3px rgba(0, 0, 0, 0.3),
                    inset 0 1px 2px rgba(255, 255, 255, 0.5);
            }

            .loading-bar {
                width: 100%;
                height: 4px;
                background: #e5e7eb;
                border-radius: 2px;
                overflow: hidden;
                position: relative;
            }

            .loading-progress {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 0%;
                background: linear-gradient(90deg, #dc2626 0%, #b91c1c 100%);
                border-radius: 2px;
                transition: width 0.3s ease;
            }

            .playon-modal__title {
                font-size: clamp(1.125rem, 4.5vw, 1.5rem);
                font-weight: 700;
                color: #111827;
                margin: 0 0 0.375rem 0;
                line-height: 1.2;
            }

            .playon-modal__subtitle {
                font-size: clamp(0.8125rem, 2.8vw, 0.9375rem);
                color: #6b7280;
                margin: 0;
                line-height: 1.4;
            }

            .playon-modal__body {
                margin: 1.25rem 0;
            }

            .playon-modal__features {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                background: #f9fafb;
                border-radius: 0.5rem;
                padding: 0.875rem;
            }

            .playon-modal__feature {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                font-size: clamp(0.8125rem, 2.3vw, 0.875rem);
                color: #374151;
                line-height: 1.3;
            }

            .playon-modal__feature svg {
                flex-shrink: 0;
                width: 18px;
                height: 18px;
            }

            .playon-modal__footer {
                display: flex;
                justify-content: center;
            }

            .playon-modal__button {
                padding: 0.75rem 1.5rem;
                border-radius: 0.5rem;
                border: none;
                font-size: clamp(0.9375rem, 2.8vw, 1rem);
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                text-align: center;
                width: 100%;
                background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
                color: white;
                box-shadow: 0 3px 10px rgba(220, 38, 38, 0.25);
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.375rem;
            }

            .playon-modal__button:hover,
            .playon-modal__button:focus {
                background: linear-gradient(135deg, #b91c1c 0%, #991b1b 100%);
                transform: translateY(-1px);
                box-shadow: 0 6px 18px rgba(220, 38, 38, 0.35);
                outline: none;
            }

            .playon-modal__button:active {
                transform: translateY(0);
                box-shadow: 0 2px 6px rgba(220, 38, 38, 0.25);
            }

            .playon-modal__button:focus-visible {
                outline: 3px solid #dc2626;
                outline-offset: 2px;
            }

            /* 3D Dice rotation animation */
            @keyframes diceRotate {
                0% {
                    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
                }
                25% {
                    transform: rotateX(180deg) rotateY(180deg) rotateZ(0deg);
                }
                50% {
                    transform: rotateX(180deg) rotateY(360deg) rotateZ(180deg);
                }
                75% {
                    transform: rotateX(360deg) rotateY(360deg) rotateZ(270deg);
                }
                100% {
                    transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
                }
            }

            /* Small mobile devices */
            @media (max-width: 360px) {
                .playon-modal__content {
                    width: 92vw;
                    padding: 1.125rem;
                }
                
                .playon-modal__button {
                    padding: 0.625rem 1.25rem;
                }
            }

            /* Landscape mode */
            @media (max-height: 600px) and (orientation: landscape) {
                .playon-modal__content {
                    max-height: 92vh;
                    overflow: hidden;
                    padding: 1rem;
                }
                
                .playon-modal__header {
                    margin-bottom: 0.75rem;
                }
                
                .playon-modal__loading-container {
                    margin-bottom: 0.625rem;
                }
                
                .logo-container {
                    margin-bottom: 0.625rem;
                }
                
                .playon-modal__body {
                    margin: 0.875rem 0;
                }
                
                .playon-modal__features {
                    padding: 0.625rem;
                    gap: 0.375rem;
                }
            }

            /* Tablet and larger */
            @media (min-width: 768px) {
                .playon-modal__content {
                    width: min(22rem, 85vw);
                    padding: 2rem;
                }
            }

            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }

            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translate(-50%, -48%);
                }
                to {
                    opacity: 1;
                    transform: translate(-50%, -50%);
                }
            }

            /* Prevent body scroll when modal is open */
            body.modal-open {
                overflow: hidden !important;
            }
        `;

        document.head.appendChild(style);
    }

    startLoadingAnimation() {
        const progressBar = this.modal.querySelector('.loading-progress');
        let progress = 0;
        
        // Smooth progress bar animation - starts immediately
        const animateProgress = () => {
            progress += 0.5;
            if (progress > 100) progress = 0;
            
            progressBar.style.width = `${progress}%`;
            
            setTimeout(animateProgress, 30);
        };
        
        // Start animation immediately
        animateProgress();
    }

    showModal() {
        this.modal.style.display = 'block';
        document.body.classList.add('modal-open');
        
        // Add focus trap for accessibility
        this.setupFocusTrap();
    }

    hideModal() {
        this.modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }

    redirectToGame() {
        // NO COOKIES SET - Just redirect
        window.location.href = this.redirectUrl;
    }

    setupFocusTrap() {
        // Trap focus within modal for accessibility
        const focusableElements = this.modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement = focusableElements[focusableElements.length - 1];

        const trapFocus = (e) => {
            if (e.key !== 'Tab') return;

            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        };

        this.modal.addEventListener('keydown', trapFocus);
    }

    bindEvents() {
        // Primary button click event
        const primaryBtn = this.modal.querySelector('.playon-modal__button');
        primaryBtn.addEventListener('click', () => {
            this.redirectToGame();
        });

        // Auto-focus the button immediately
        primaryBtn.focus();
    }
}

// Initialize modal when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Show modal immediately with no delay
    new PlayOnModal();
});

// Export for module usage if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PlayOnModal;
}