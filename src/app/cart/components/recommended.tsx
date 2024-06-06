import Image from "next/image";
import Link from "next/link";

const Recommended = () => {
  return (
    <div className="w-full flex-col">
      <h2 className="my-4 text-left text-2xl font-bold">
        Você também pode gostar
      </h2>
      <p className="mb-2 text-xs text-muted-foreground">
        Separamos algumas ofertas que combinam com o que você escolheu.
      </p>

      <div className="flex flex-col">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <Link href="products">
            <Image
              src="/banner-mouses.png"
              alt="até 55% de desconto em mouses"
              height={0}
              width={0}
              className="h-auto w-full max-w-[420px] object-contain"
              sizes="100vw"
              quality={100}
            />
          </Link>
          <Link href="products">
            <Image
              src="/banner-fones.png"
              alt="até 20% de desconto em fones"
              height={0}
              width={0}
              className="h-auto w-full max-w-[420px] object-contain"
              sizes="100vw"
              quality={100}
            />
          </Link>
        </div>
        <div className="mb-4 mt-2 flex w-full">
          <Image
            src="/banner-frete-gratis.png"
            alt="até 55% de desconto em mouses"
            height={0}
            width={0}
            className="h-auto w-full max-w-[864px] object-contain"
            sizes="100vw"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Recommended;
