import { michroma } from "@/assets/fonts";

const Jumbotron = () => {
  return (
    <section className="mt-10 space-y-3 text-center">
      <h1 className={`md:text-6xl1 text-4xl font-bold ${michroma.className}`}>
        Air<span className="text-orange-600"> Rent</span>
      </h1>
      <p className="text-lg md:text-xl"></p>
    </section>
  );
};

export default Jumbotron;

//container digunakan untuk pembuatan yang sudah dibuat sesuai layar
