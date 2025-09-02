import { cn } from "@/lib/utils";

interface SkeletonLoaderProps {
	className?: string;
	variant?: "card" | "text" | "avatar" | "image";
	width?: string;
	height?: string;
}

export const SkeletonLoader = ({
	className,
	variant = "text",
	width,
	height,
}: SkeletonLoaderProps) => {
	const baseClasses = "animate-pulse rounded-md bg-muted";

	const variantClasses = {
		card: "rounded-xl border p-6 shadow-sm",
		text: "h-4 rounded",
		avatar: "rounded-full",
		image: "rounded-lg",
	};

	const sizeStyles = {
		width: width || (variant === "avatar" ? "40px" : "100%"),
		height:
			height ||
			(variant === "text"
				? "1rem"
				: variant === "avatar"
				? "40px"
				: "auto"),
	};

	return (
		<div
			className={cn(baseClasses, variantClasses[variant], className)}
			style={sizeStyles}
		/>
	);
};
