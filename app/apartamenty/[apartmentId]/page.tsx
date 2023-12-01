import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return <p>Post: {router.query.slug}</p>;
}
