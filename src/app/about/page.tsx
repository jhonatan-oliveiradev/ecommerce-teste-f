import Image from "next/image";

const AboutPage = () => {
  return (
    <section className="mx-auto h-auto w-full max-w-7xl">
      <h2 className="my-4 text-left text-2xl font-bold">Sobre nós</h2>
      <div className="mb-4 flex flex-col items-start gap-8 lg:flex-row">
        <Image
          src="/store-facade.png"
          alt="Zion Store"
          height={0}
          width={0}
          className="h-auto w-[580px] rounded-xl object-contain shadow-md"
          sizes="100vw"
          quality={100}
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold">Somos a Zion Store</h1>
          <p>
            Uma loja de produtos eletrônicos dedicada a oferecer as melhores
            soluções em tecnologia para facilitar e aprimorar o seu dia a dia.
            Desde a nossa fundação, temos o compromisso de proporcionar uma
            experiência de compra única, combinando inovação, qualidade e um
            atendimento excepcional.
          </p>
          <p>
            Na Zion Store, nossa missão é ser a sua primeira escolha quando se
            trata de eletrônicos de alta qualidade. Trabalhamos incansavelmente
            para selecionar os melhores produtos do mercado, garantindo que cada
            item em nosso catálogo atenda aos mais altos padrões de desempenho e
            durabilidade. Acreditamos que a tecnologia deve ser acessível a
            todos e nos empenhamos em oferecer preços competitivos sem
            comprometer a qualidade.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">O que Oferecemos?</h3>
          <p>
            Variedade e Qualidade: De smartphones a laptops, de gadgets
            inteligentes a acessórios, nossa gama de produtos é cuidadosamente
            curada para atender às suas necessidades tecnológicas.
            <br />
            Inovação Constante: Mantemos nosso estoque atualizado com as últimas
            novidades e tendências do mundo da tecnologia, garantindo que você
            sempre encontre o que há de mais moderno e eficiente.
            <br />
            Atendimento Personalizado: Nossa equipe está sempre pronta para
            ajudar, oferecendo suporte especializado para que você faça a
            escolha certa.
            <br />
            Estamos aqui para responder suas perguntas e proporcionar uma
            experiência de compra sem complicações.
          </p>
          <h3 className="font-semibold">Por que Escolher a Zion Store?</h3>
          <p>
            Confiança e Segurança: Com uma política de devolução clara e
            garantias robustas, você pode comprar com total tranquilidade.
            <br />
            Entrega Rápida: Sabemos que você não vê a hora de usar seus novos
            eletrônicos. Por isso, trabalhamos com os melhores parceiros
            logísticos para garantir entregas rápidas e seguras.
            <br />
            Compromisso com a Satisfação: Seu feedback é essencial para nós.
            <br />
            Buscamos constantemente aprimorar nossos serviços e produtos, para
            que cada experiência com a Zion Store seja melhor que a anterior.
          </p>
        </div>
        <Image
          src="/store-facade.png"
          alt="Zion Store"
          height={0}
          width={0}
          className="hidden h-auto w-[580px] rounded-xl object-contain shadow-md lg:flex"
          sizes="100vw"
          quality={100}
        />
      </div>

      <div className="my-6 flex flex-col items-center justify-center gap-2 text-center">
        <h3 className="font-semibold">Junte-se à Nossa Comunidade</h3>
        <p>
          Mais do que uma loja, a Zion Store é uma comunidade de apaixonados por
          tecnologia.
          <br />
          Siga-nos nas redes sociais para ficar por dentro das novidades,
          promoções exclusivas e dicas incríveis que vão transformar a forma
          como você interage com o mundo digital.
        </p>
        <p className="text-center font-semibold">
          Agradecemos por escolher a Zion Store. Aqui, a tecnologia é feita para
          você!
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
