<script>
export default {
  setup() {
    return {};
  },
};
</script>

<template>
  <main class="relative top-12 block lg:top-16">
    <section class="mt-4 px-5">
      <div
        class="mx-auto max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-5xl"
      >
        <h1
          class="fadeIn grHeading max-w-lg text-left text-4xl font-bold sm:text-center sm:text-5xl md:max-w-3xl md:text-6xl lg:max-w-4xl lg:text-7xl xl:max-w-5xl xl:text-7xl"
        >
          Get in touch.
        </h1>
        <p
          class="mt-4 max-w-lg text-left text-base font-semibold text-light sm:text-center sm:text-lg md:max-w-3xl md:text-xl lg:max-w-4xl lg:text-2xl xl:max-w-5xl xl:text-3xl"
        >
          Please provide your details below.
        </p>
      </div>
    </section>
    <section class="relative mt-8">
      <div
        class="mx-auto max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-5xl"
      >
        <div class="flex justify-center">
          <form class="flex w-full max-w-lg flex-wrap">
            <div class="w-full px-2 md:w-1/2">
              <input
                class="mb-3 block w-full appearance-none rounded border border-darkAccentBorder bg-darkAccent py-3 px-4 leading-tight text-light focus:border-primary focus:outline-none"
                type="text"
                placeholder="Firstname"
              />
            </div>
            <div class="w-full px-2 md:w-1/2">
              <input
                class="mb-3 block w-full appearance-none rounded border border-darkAccentBorder bg-darkAccent py-3 px-4 leading-tight text-light focus:border-primary focus:outline-none"
                type="text"
                placeholder="Lastname"
              />
            </div>
            <div class="w-full px-2">
              <input
                class="mb-3 block w-full appearance-none rounded border border-darkAccentBorder bg-darkAccent py-3 px-4 leading-tight text-light focus:border-primary focus:outline-none"
                type="text"
                placeholder="Mail"
              />
            </div>
            <div class="w-full px-2">
              <input
                class="mb-3 block w-full appearance-none rounded border border-darkAccentBorder bg-darkAccent py-3 px-4 leading-tight text-light focus:border-primary focus:outline-none"
                type="text"
                placeholder="Message"
              />
            </div>
            <div class="mx-auto h-20 w-1/2 px-2">
              <button
                class="mb-3 block w-full appearance-none rounded bg-primary py-3 px-4 text-light"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>
