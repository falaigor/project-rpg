import { Header } from "Components/Header";
import { Sidebar } from "Components/Sidebar";
import { FeedPodcasts } from "Components/FeedPodcasts";

export default function PodcastView() {
  return (
    <Flex px="10" direction="column" h="100vh">
      <Header />

      <Stack width="100%" maxWidth={1280} m="0 auto">
        <Sidebar />
        <FeedPodcasts />
      </Stack>
    </Flex>
  );
}
