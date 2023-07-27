import { Container, UploadWrapper } from "@/components/Shared";

export default function Home() {
  const content =
    typeof globalThis !== "undefined" ? (
      <Container>
        <UploadWrapper />
      </Container>
    ) : (
      <div />
    );

  return content;
}
