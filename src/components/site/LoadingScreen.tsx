import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
	onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		// Minimum loading time to show the animation
		const minLoadingTime = 1000;

		const timer = setTimeout(() => {
			setIsVisible(false);
			// Delay the callback to allow for exit animation
			setTimeout(onLoadingComplete, 300);
		}, minLoadingTime);

		return () => clearTimeout(timer);
	}, [onLoadingComplete]);

	if (!isVisible) return null;

	return (
		<motion.div
			className="fixed inset-0 bg-background flex items-center justify-center z-50"
			initial={{ opacity: 1 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			<div className="text-center">
				<motion.div
					className="relative mx-auto mb-6"
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{
						type: "spring",
						stiffness: 260,
						damping: 20,
						duration: 0.5,
					}}
				>
					<img
						src="/logo.png"
						alt="PT. Delta Tiga Enam"
						className="h-12 w-auto mx-auto"
					/>
					<motion.div
						className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
						animate={{
							scale: [1, 1.2, 1],
							opacity: [0.3, 0.6, 0.3],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>
				</motion.div>

				<motion.div
					className="w-40 h-1 bg-muted rounded-full mx-auto overflow-hidden"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.3 }}
				>
					<motion.div
						className="h-full bg-primary rounded-full"
						initial={{ width: 0 }}
						animate={{ width: "100%" }}
						transition={{
							duration: 1,
							ease: "easeInOut",
							repeat: Infinity,
							repeatType: "reverse",
						}}
					/>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default LoadingScreen;
