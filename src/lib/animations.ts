// Animation utilities and constants

export const ANIMATION_VARIANTS = {
	fadeIn: {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	},
	slideInLeft: {
		hidden: { opacity: 0, x: -50 },
		visible: { opacity: 1, x: 0 },
	},
	slideInRight: {
		hidden: { opacity: 0, x: 50 },
		visible: { opacity: 1, x: 0 },
	},
	scaleIn: {
		hidden: { opacity: 0, scale: 0.8 },
		visible: { opacity: 1, scale: 1 },
	},
};

export const ANIMATION_TRANSITIONS = {
	default: {
		duration: 0.6,
		ease: "easeOut",
	},
	spring: {
		type: "spring",
		stiffness: 100,
		damping: 10,
	},
	smooth: {
		duration: 0.8,
		ease: [0.4, 0, 0.2, 1],
	},
};

// Utility function to create staggered animations
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
	hidden: {},
	visible: {
		transition: {
			staggerChildren,
			delayChildren,
		},
	},
});

// Utility function to create delayed animations
export const delayedAnimation = (delay = 0.2) => ({
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			delay,
		},
	},
});
