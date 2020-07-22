<template>
  <section>
    <div class="max-w-md mx-auto px-8 py-8 lg:max-w-6xl lg:px-12">
      <h2 class="text-3xl text-center font-sans my-4 text-red-500">Popular destinations</h2>
      <p class="text-gray-700 text-center mb-10">Select the greate jorney and explore new destinations</p>
      <div class="flex flex-wrap -mx-4">
        <div class="mt-6 w-full px-4 lg:w-1/2" v-for="destination in popularDestinations" v-bind:key="destination">
          <div class="flex rounded-lg bg-white shadow-lg overflow-auto">
            <div class="flex-1 self-stretch bg-cover bg-center" :style="{ backgroundImage: `url('${destination.imageUrl}')` }">
              <!-- <img class="w-full" :src="destination.imageUrl" :alt="destination.imageAlt" /> -->
            </div>
            <div class="flex-1 px-6 my-4 flex-grow">
              <h3 class="text-lg font-semibold text-gray-800">{{ destination.destination }}</h3>
              <p class="text-gray-600">${{ destination.averagePrice }}</p>
              <div class="mt-4 flex items-center">
                <svg v-for="i in 5" :key="i" :class="i <= destination.rating ? 'text-teal-500' : 'text-gray-300'" class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10 15l-6 3 1-6-5-5 7-1 3-6 3 6 7 1-5 5 1 6z"/>
                </svg>
                <a href="#" class="ml-2 text-indigo-500">Explore {{ destination.propertyCount }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-md mx-auto px-8 py-8 lg:max-w-6xl lg:px-12">
    <div class="max-w-sm w-full lg:max-w-full lg:flex">
      <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('assets/img/cancun_d.jpg')" title="Woman holding a mug">
      </div>
      <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="mb-8">
          <p class="text-sm text-gray-600 flex items-center">
            <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Members only
          </p>
          <div class="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
          <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
        </div>
        <div class="flex items-center">
          <img class="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar">
          <div class="text-sm">
            <p class="text-gray-900 leading-none">Jonathan Reinink</p>
            <p class="text-gray-600">Aug 18</p>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div class="max-w-md mx-auto px-8 py-8 lg:max-w-6xl lg:px-12">
      <h2 class="text-3xl text-center font-sans my-4 text-red-500">Popular destinations</h2>
      <p class="text-gray-700 text-center mb-10">Select the greate jorney and explore new destinations</p>
      <div class="flex justify-center flex-wrap -mx-4">
        <div class="mt-4 w-full px-4 lg:w-1/4" v-for="destination in popularDestinations" v-bind:key="destination">
          <div class="rounded-lg bg-white shadow-lg overflow-hidden">
            <div class="relative bg-red-500 pb-1/2">
              <img class="absolute top-0 h-full w-full object-cover object-center" :src="destination.imageUrl" :alt="destination.imageAlt">
            </div>
            <div class="p-6">
              <div class="flex items-baseline">
                <span class="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full"></span>
                <div class="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide"></div>
              </div>
              <h4 class="mt-1 font-semibold text-lg leading-tight truncate">{{ destination.destination }}</h4>
              <div class="mt-1">${{ destination.averagePrice }}</div>
              <div class="mt-2 flex items-center">
                <svg v-for="i in 5" :key="i" :class="i <= destination.rating ? 'text-teal-500' : 'text-gray-300'" class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10 15l-6 3 1-6-5-5 7-1 3-6 3 6 7 1-5 5 1 6z"/>
                </svg>
                <span class="ml-2 text-gray-600 text-sm">{{ destination.propertyCount }}</span>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>

    
  </section>
</template>

<script>
export default {
  data () {
    return {
      popularDestinations: [
        {
          destination: 'Cuncun',
          averagePrice: 150,
          propertyCount: 76,
          imageUrl: 'assets/img/cancun_d.jpg',
          imageAlt: 'Cancun excursion',
          rating: 4
        },
        {
          destination: 'Mexico',
          averagePrice: 250,
          propertyCount: 55,
          imageUrl: 'assets/img/mexico-city.jpg',
          imageAlt: 'Mexico excursion',
          rating: 3
        },
        {
          destination: 'Cuncun',
          averagePrice: 150,
          propertyCount: 76,
          imageUrl: 'assets/img/cancun_d.jpg',
          imageAlt: 'Cancun excursion',
          rating: 4
        },
        {
          destination: 'Mexico',
          averagePrice: 250,
          propertyCount: 55,
          imageUrl: 'assets/img/mexico-city.jpg',
          imageAlt: 'Mexico excursion',
          rating: 3
        }
      ]
    }
  }
}
</script>
