import Container from "./container";

export default function Header() {
  return (
    <header className="w-full text-white py-8">
      <Container className="mx-auto">
        <div className="flex flex-row items-center">
          <div>
            <span className="text-3xl select-none">Vdolita</span>
          </div>
        </div>
      </Container>
    </header>
  );
}
