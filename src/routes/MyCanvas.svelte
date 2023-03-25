// MySvelteComponent.svelte

<script lang="ts">
  import React from 'react';
  import ReactDOM from 'react-dom';
  import MyThreeComponent from './MyThreeComponent';

  let container: HTMLDivElement;
  
  function mount() {
    const element = React.createElement(MyThreeComponent);
    ReactDOM.render(element, container);
  }
  
  function unmount() {
    ReactDOM.unmountComponentAtNode(container);
  }
  
  onMount(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    mount();
  });

  onDestroy(unmount);
</script>

<!-- Your Svelte component template goes here -->
