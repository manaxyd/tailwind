<template>
  <header class="bg-gray-800 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
            <img class="h-10" src="assets/img/logo_bmg.svg" alt="">
        </div>
        <div class="sm:hidden"> 
            <button @click="isOpen = !isOpen" type="button" class="block text-gray-500 focus:text-white focus:outline-none hover:text-white">
                <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path v-if="isOpen" d="M10 9L3 2 2 3l7 7-7 7 1 1 7-7 7 7 1-1-7-7 7-7-1-1-7 7z"/>
                    <path v-if="!isOpen" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
            </button>
        </div>
      </div>
      <div :class="isOpen ? 'block' : 'hidden'" class="px-2 pb-4 pt-2 sm:flex sm:p-0">
          <a href="#" class="block text-white font-normal">linl A</a>
          <a href="#" class="block text-white font-normal sm:ml-2">linl B</a>
          <a href="#" class="block text-white font-normal sm:ml-2">linl C</a>
      </div>
  </header>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
        }
    }

}
</script>