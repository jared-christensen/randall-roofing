import Container from "../components/container";
import Logo from "../components/logo";
export default function Home() {
  return (
    <>
      <Container pageTitle="Home">
        <div className="flex justify-center min-h-screen items-center">
          <Logo></Logo>
        </div>
      </Container>
    </>
  );
}
