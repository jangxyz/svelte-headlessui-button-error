<script lang="ts">
  import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@rgossiaux/svelte-headlessui';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<TabGroup>
  <TabList>
    <Tab as="div">Tab 1</Tab>
    <Tab as="div">Tab 2</Tab>
    <Tab as="div">Tab 3</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>Content 1</TabPanel>
    <TabPanel>Content 2</TabPanel>
    <TabPanel>Content 3</TabPanel>
  </TabPanels>
</TabGroup>

