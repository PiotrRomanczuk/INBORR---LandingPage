import Image from 'next/image';

export default function Loading() {
	// You can add any UI inside Loading, including a Skeleton.
	return <Image alt='logo' src='/logo.png' width={460} height={200} />;
}
