<template>
  <header class="bg-[#231C1A] bg-opacity-80 h-20 w-full flex fixed">
    <button class="sm:hidden block bg-transparent text-white text-4xl absolute top-4 left-5 border-0 cursor-pointer">&#9776</button>
    <h1
      class="text-white bg-no-repeat indent-[-9999px] bg-center absolute left-1/2 transform -translate-x-1/2 sm:left-32 top-0 w-52 leading-[80px] text-4xl bg-[url('@/assets/images/Logo.svg')]"
    >
      烘焙工坊
    </h1>
    <nav>
      <ul class="absolute right-[5vw] top-0 leading-[80px] hidden sm:block">
        <li class="inline mr-[4vw]"><a href="#" class="text-white no-underline hover:underline" >最新消息</a></li>
        <li class="inline mr-[4vw]">
          <a href="#" class="text-white no-underline hover:underline">关于我们</a>
        </li>
        <li class="inline mr-[4vw]">
          <a href="#" class="text-white no-underline hover:underline">分店地址</a>
        </li>
        <li class="inline mr-[4vw]"><a href="#" class="text-white no-underline hover:underline">会员专区</a></li>
      </ul>
    </nav>
  </header>
</template>
