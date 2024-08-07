import Image from "next/image";

export default function Background() {
  return (
    <div className="relative flex">
      <Image
        width={1000}
        height={1000}
        priority={true}
        alt="spattern-hills-image"
        src={"/images/bg-stars.svg"}
        className="fixed left-0 top-0 h-screen w-screen object-cover "
      />
    </div>
  );
}
