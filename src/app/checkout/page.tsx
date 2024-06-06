import Footer from "@/components/footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const CheckoutPage = () => {
  return (
    <section className="mx-auto h-auto w-full max-w-7xl">
      <h2 className="mt-4 text-left text-2xl font-bold">Pedido feito!</h2>
      <p className="mb-4 text-sm text-muted-foreground">
        Obrigado por comprar conosco!
      </p>

      <div className="flex flex-col gap-4">
        <h2 className="mt-4 text-left text-2xl font-bold">
          Você também pode gostar
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <div key={item} className="w-full">
              <Card className="h-[334px] w-[228px]">
                <CardContent>
                  <Skeleton className="h-[200px] w-[178px] pt-6" />
                  <Skeleton className="mt-4 h-6 w-2/3" />
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <Skeleton className="h-6 w-1/4" />
                  <Skeleton className="h-6 w-6" />
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
