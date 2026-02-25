import { metadata as studioMetadata, viewport as studioViewport } from "next-sanity/studio";
import { StudioWrapper } from "./StudioWrapper";

export const metadata = {
  ...studioMetadata,
  title: "Content Studio",
};

export const viewport = studioViewport;

export default function StudioPage() {
  return <StudioWrapper />;
}
