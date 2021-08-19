<template>
    <div class="bg-github-background text-sm text-github-text-color">
        <nav class="bg-github-header text-white px-8 py-3 flex text-center flex-wrap md:flex-nowrap">
            <div class="hidden md:flex -mx-1 mr-4">
                <a href="https://www.github.com" class="text-white hover:text-gray-400 transition duration-150 ease-in">
                    <svg class="w-8 h-8" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" fill="none">
                        <path fill-rule="evenodd" fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                </a>
            </div>
            <div class="flex self-stretch w-full md:mr-4">
                <div class="relative rounded-md shadow-sm">
                    <input type="search" name="search" id="search" class="focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-64 pl-3 py-1.5 pr-8 bg-github-background text-white placeholder-text-github-text-color border border-white border-opacity-10 rounded-md transition duration-150 ease-in" placeholder="Search or jump to...">
                    <div class="absolute inset-y-0 right-0 flex items-center cursor-default">
                        <div class="text-gray-500 border border-white border-opacity-10 rounded mr-1 px-1.5">
                            /
                        </div>
                    </div>
                </div>
                <ul class="flex items-center ml-4 font-semibold space-x-4">
                    <li>
                        <a href="#" class="text-white text-opacity-90 hover:text-github-text-color transition duration-150 ease-in">Pull requests</a>
                    </li>
                    <li>
                        <a href="#" class="text-white text-opacity-90 hover:text-github-text-color transition duration-150 ease-in">Issues</a>
                    </li>
                    <li>
                        <a href="#" class="text-white text-opacity-90 hover:text-github-text-color transition duration-150 ease-in">Marketplace</a>
                    </li>
                    <li>
                        <a href="#" class="text-white text-opacity-90 hover:text-github-text-color transition duration-150 ease-in">Explore</a>
                    </li>
                </ul>
            </div>
            <div class="relative flex items-center">
                <button class="hover:text-github-text-color transition duration-150 ease-in focus:outline-none px-2 py-2">
                    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                </button>
            </div>
            <div class="relative flex items-center">
                <button class="flex items-center space-x-0.5 hover:text-github-text-color transition px-2 py-2 duration-150 ease-in focus:outline-none">
                    <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                    </svg>
                    <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            <div class="relative flex items-center">
                <button class="hover:text-github-text-color transition duration-150 ease-in focus:outline-none rounded-full">
                    <svg class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                    </svg>
                </button>
                <svg class="h-4 w-4 ml-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </div>
        </nav>
        <main class="text-github-secondary-text-color">
            <div class=" pt-4 mb-8">
                <div class="flex mb-3 px-4 md:px-5 lg:px-6">
                    <div class="flex min-w-0 w-full">
                        <h1 class="flex flex-wrap items-center break-word text-normal">
                            <svg class="mr-2 h-4 w-4 text-gray-500" viewBox="0 0 16 16" version="1.1" aria-hidden="true">
                                <path fill-rule="evenodd" fill="currentColor" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                            </svg>
                            <a href="" class="text-blue-400 hover:underline text-xl">tailwindlabs</a>
                            <span class="mx-1 text-gray-400 text-xl">/</span>
                            <a href="" class="text-blue-400 hover:underline text-xl font-semibold">tailwindcss</a>
                        </h1>
                    </div>
                    <ul class="flex items-center space-x-3">
                        <li>
                            <div class="relative z-0 inline-flex rounded-md shadow-sm space-x-0 text-github-text-color">
                                <button type="button" class="rounded-l-md flex items-center px-3 py-1 text-sm font-medium bg-github-bg-gray-button border border-github-border-gray-button hover:border-white hover:border-opacity-50 hover:bg-white hover:bg-opacity-20 transition duration-150 ease-in">
                                    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4 mr-1 text-gray-400">
                                        <path fill-rule="evenodd" fill="currentColor" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>
                                    </svg>
                                    <span>Watch</span>
                                    <svg class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                                <button type="button" class="rounded-r-md flex items-center px-3 py-1 text-sm font-medium bg-github-bg-gray-button border border-l-0 border-github-border-gray-button hover:text-blue-400 transition duration-150 ease-in">539</button>
                            </div>
                        </li>
                        <li>
                            <div class="relative z-0 inline-flex rounded-md shadow-sm space-x-0 text-github-text-color">
                                <button type="button" class="rounded-l-md flex items-center px-3 py-1 text-sm font-medium bg-github-bg-gray-button border border-github-border-gray-button hover:border-white hover:border-opacity-50 hover:bg-white hover:bg-opacity-20  transition duration-150 ease-in">
                                    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4 text-gray-400 mr-1">
                                        <path fill-rule="evenodd" fill="currentColor" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                                </svg>
                                    <span>Star</span>
                                    <svg class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                                <button type="button" class="rounded-r-md flex items-center px-3 py-1 text-sm font-medium bg-github-bg-gray-button border border-l-0 border-github-border-gray-button hover:text-blue-400 transition duration-150 ease-in">45.7k</button>
                            </div>
                        </li>
                        <li>
                            <div class="relative z-0 inline-flex rounded-md shadow-sm space-x-0 text-github-text-color">
                                <button type="button" class="rounded-l-md flex items-center px-3 py-1 text-sm font-medium bg-github-bg-gray-button border border-github-border-gray-button hover:border-white hover:border-opacity-50 hover:bg-white hover:bg-opacity-20  transition duration-150 ease-in">
                                <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4 mr-1 text-gray-400">
                                        <path fill-rule="evenodd" fill="currentColor" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                                    </svg>
                                    <span>Fork</span>
                                    <svg class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                                <button type="button" class="rounded-r-md flex items-center px-3 py-1 text-sm font-medium bg-github-bg-gray-button border border-l-0 border-github-border-gray-button hover:text-blue-400 transition duration-150 ease-in">2.1k</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="shadow-nav mb-3 px-4 md:px-5 lg:px-6">
                    <ul class="flex list-none">
                        <li class="flex">
                            <a class="flex items-center px-3 py-3 border-b-2 border-githib-orange cursor-pointer">
                                <svg class="h-4 w-4 hidden sm:inline-flex mr-1.5" viewBox="0 0 16 16" version="1.1" aria-hidden="true">
                                    <path fill-rule="evenodd" fill="currentColor" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"></path>
                                </svg>
                                <span class="font-medium text-white">Code</span>
                            </a>
                        </li>
                        <li class="flex">
                            <a class="group flex items-center px-3 py-3 cursor-pointer border-b-2 border-transparent hover:border-gray-600 transition duration-150 ease-in">
                                <svg class="h-4 w-4 hidden sm:inline-flex mr-1.5" viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path fill="currentColor" d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fill="currentColor" fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path></svg>
                                <span class="text-github-secondary-text-color mr-2 group-hover:text-white">Issues</span>
                                <div class="rounded-full bg-github-bg-gray-button px-2 text-xs py-1">63</div>
                            </a>
                        </li>
                        <li class="flex">
                            <a class="group flex items-center px-3 py-3 cursor-pointer border-b-2 border-transparent hover:border-gray-600 transition duration-150 ease-in">
                                <svg class="h-4 w-4 hidden sm:inline-flex mr-1.5" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" fill="currentColor" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"></path></svg>
                                <span class="text-github-secondary-text-color mr-2 group-hover:text-white">Pull requests</span>
                                <div class="rounded-full bg-github-bg-gray-button px-2 text-xs py-1">40</div>
                            </a>
                        </li>
                        <li class="flex">
                            <a class="group flex items-center px-3 py-3 cursor-pointer border-b-2 border-transparent hover:border-gray-600 transition duration-150 ease-in">
                                <svg class="h-4 w-4 hidden sm:inline-flex mr-1.5" viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" fill="currentColor" d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"></path></svg>
                                <span class="text-github-secondary-text-color mr-2 group-hover:text-white">Discussions</span>
                            </a>
                        </li>
                        <li class="flex">
                            <a class="group flex items-center px-3 py-3 cursor-pointer border-b-2 border-transparent hover:border-gray-600 transition duration-150 ease-in">
                                <svg class="h-4 w-4 hidden sm:inline-flex mr-1.5" viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" fill="currentColor" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"></path></svg>
                                <span class="text-github-secondary-text-color mr-2 group-hover:text-white">Actions</span>
                            </a>
                        </li>
                        <li class="flex">
                            <a class="group flex items-center px-3 py-3 cursor-pointer border-b-2 border-transparent hover:border-gray-600 transition duration-150 ease-in">
                                <svg class="h-4 w-4 hidden sm:inline-flex mr-1.5" viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" fill="currentColor" d="M7.467.133a1.75 1.75 0 011.066 0l5.25 1.68A1.75 1.75 0 0115 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 01-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 011.217-1.667l5.25-1.68zm.61 1.429a.25.25 0 00-.153 0l-5.25 1.68a.25.25 0 00-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 00.154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 00-.174-.237l-5.25-1.68zM9 10.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.75a.75.75 0 10-1.5 0v3a.75.75 0 001.5 0v-3z"></path></svg>
                                <span class="text-github-secondary-text-color mr-2 group-hover:text-white">Security</span>
                            </a>
                        </li>
                        <li class="flex">
                            <a class="group flex items-center px-3 py-3 cursor-pointer border-b-2 border-transparent hover:border-gray-600 transition duration-150 ease-in">
                                <svg class="h-4 w-4 hidden sm:inline-flex mr-1.5" viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" fill="currentColor" d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"></path></svg>
                                <span class="text-github-secondary-text-color mr-2 group-hover:text-white">Insights</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="max-w-container-xl mx-auto px-3 md:px-4 lg:px-5">
                <div class="flex">
                    <div class="w-9/12 px-4">
                        <div class="flex items-center justify-between mb-4">
                            <div class="flex items-center space-x-4">
                                <div class="relative inline-flex rounded-md shadow-sm space-x-0 text-github-text-color">
                                    <button type="button" class="rounded-md flex items-center px-4 py-1.5 text-sm font-medium bg-github-bg-gray-button border border-github-border-gray-button hover:border-white hover:border-opacity-50 hover:bg-white hover:bg-opacity-20 transition duration-150 ease-in">
                                        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4 mr-2 text-gray-400">
                                            <path fill-rule="evenodd" fill="currentColor" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>
                                        </svg>
                                        <span>Watch</span>
                                        <svg class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                                <a href="#" class="group relative inline-flex rounded-md shadow-sm space-x-1 text-github-text-color">
                                    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="w-4 h-4 group-hover:text-blue-400 transition duration-150 ease-in">
                                        <path fill-rule="evenodd" fill="currentColor" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"></path>
                                    </svg>
                                    <span class="font-medium group-hover:text-blue-400 transition duration-150 ease-in">43</span>
                                    <span class="text-github-secondary-text-color group-hover:text-blue-400 transition duration-150 ease-in">branches</span>
                                </a>
                                <a href="#" class="group relative inline-flex rounded-md shadow-sm space-x-1 text-github-text-color">
                                    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="w-4 h-4 group-hover:text-blue-400 transition duration-150 ease-in">
                                        <path fill-rule="evenodd" fill="currentColor" d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"></path>
                                    </svg>
                                    <span class="font-medium group-hover:text-blue-400 transition duration-150 ease-in">161</span>
                                    <span class="text-github-secondary-text-color group-hover:text-blue-400 transition duration-150 ease-in">tags</span>
                                </a>
                            </div>
                            <ul class="flex items-center space-x-2">
                                <li>
                                    <button type="button" class="rounded-md flex items-center px-4 py-1.5 text-sm font-medium bg-github-bg-gray-button border text-github-text-color border-github-border-gray-button hover:border-white hover:border-opacity-50 hover:bg-white hover:bg-opacity-20 transition duration-150 ease-in">
                                        Go to file
                                    </button>
                                </li>
                                <li>
                                    <div class="relative inline-flex rounded-md shadow-sm space-x-0 text-github-text-color">
                                        <button type="button" class="rounded-md flex items-center px-4 py-1.5 text-sm font-medium bg-github-bg-gray-button border text-github-text-color border-github-border-gray-button hover:border-white hover:border-opacity-50 hover:bg-white hover:bg-opacity-20 transition duration-150 ease-in">
                                            <span>Add file</span>
                                            <svg class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </li>
                                <li>
                                    <div class="relative inline-flex rounded-md shadow-sm space-x-0 text-github-text-color">
                                        <button type="button" class="rounded-md flex items-center px-4 py-1.5 text-sm font-medium bg-github-primary-bg border border-github-primary-border text-github-text-color hover:border-github-primary-border-hover hover:bg-github-primary-bg-hover transition duration-150 ease-in">
                                            <span>Code</span>
                                            <svg class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="border border-github-border-gray-button mb-4 rounded-md">
                            <div class="flex items-center justify-between px-3 py-3">
                                <div class="flex items-center">
                                    <a href="#" class="rounded-full mr-3">
                                        <img src="~assets/img/testimonials/testimonials-1.jpg" alt="pull request avatar" class="h-6 w-6 rounded-full" />
                                    </a>
                                    <a href="#" class="text-github-text-color hover:underline font-medium transition duration-150 ease-in mr-1">doe</a>
                                    <a href="#" class="text-github-text-color hover:underline hover:text-blue-400 transition duration-150 ease-in mr-1">Fix malformed keyframes when using class variants </a>
                                    <span class="text-github-text-color">
                                        (<a href="#" class="text-blue-400 hover:underline transition duration-150 ease-in">#5223</a>)
                                    </span>
                                </div>
                                <div class="flex items-center space-x-4">
                                    <div class="flex items-center space-x-2">
                                        <div class="relative">
                                            <a href="#" class="text-github-primary-border-hover">
                                                <svg aria-label="3 / 3 checks OK" class="h-4 w-4" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" fill="currentColor" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
                                            </a>
                                        </div>
                                        <a href="#" class="text-xs hover:text-blue-400 hover:underline transition duration-150 ease-in">
                                            4ff383f
                                        </a>
                                        <a href="#" class="hover:text-blue-400 hover:underline transition duration-150 ease-in mr-4">
                                            19 hours ago
                                        </a>
                                    </div>
                                    <a href="#" class="group relative flex items-center space-x-1 text-github-text-color">
                                        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="w-4 h-4 group-hover:text-blue-400 transition duration-150 ease-in">
                                            <path fill-rule="evenodd" fill="currentColor" d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"></path>
                                        </svg>
                                        <span class="font-medium group-hover:text-blue-400 transition duration-150 ease-in">4,052</span>
                                        <span class="text-github-secondary-text-color group-hover:text-blue-400 transition duration-150 ease-in">commits</span>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="Directory" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline text-github-text-color" title=".github">.github</a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline" title="Update 1.bug_report.yml">Update 1.bug_report.yml</a>
                                    </div>
                                    <div class="w-24 text-right" title="2 months ago">
                                        2 months ago
                                    </div>
                                </div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="Directory" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline text-github-text-color" title="dist">dist</a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline" title="Add empty .npmignore so dist files are distributed with releases">Add empty .npmignore so dist files are distributed with releases</a>
                                    </div>
                                    <div class="w-24 text-right" title="4 years ago">
                                        4 years ago
                                    </div>
                                </div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="Directory" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline text-github-text-color" title="integrations">integrations</a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="group hover:text-blue-400 hover:underline" title="Cleanup leftover layers (#4853)">Cleanup leftover layers (<span class="text-blue-400 group-hover:underline">#4853</span>)</a>
                                    </div>
                                    <div class="w-24 text-right" title="4 years ago">
                                        2 months ago
                                    </div>
                                </div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="Directory" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline text-github-text-color" title="jest">jest</a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="group hover:text-blue-400 hover:underline" title="Cleanup leftover layers (#4853)">JIT: Optimize universal selector usage by inlining only the relevant …</a>
                                    </div>
                                    <div class="w-24 text-right" title="4 years ago">
                                        2 months ago
                                    </div>
                                </div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="Directory" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline text-github-text-color" title="perf">perf</a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="group hover:text-blue-400 hover:underline" title="Performance improvements + memory leak fix (#3032)">Performance improvements + memory leak fix (<span class="text-blue-400 group-hover:underline">#3032</span>)</a>
                                    </div>
                                    <div class="w-24 text-right" title="8 months ago">
                                        8 months ago
                                    </div>
                                </div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="Directory" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="flex items-center hover:text-blue-400 hover:underline text-github-text-color" title="plugins/nesting">
                                            <span class="text-github-secondary-text-color">plugins/</span>
                                            <span>nesting</span>
                                        </a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="group hover:text-blue-400 hover:underline" title="tailwindcss/nesting (#4673)">
                                            Add <code class="bg-github-bg-gray-button px-1 rounded-md py-1 text-xs">tailwindcss/nesting</code> plugin (<span class="text-blue-400 group-hover:underline">#4673</span>)
                                        </a>
                                    </div>
                                    <div class="w-24 text-right" title="2 months ago">
                                        2 months ago
                                    </div>
                                </div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="Directory" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline text-github-text-color" title="scripts">scripts</a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="group hover:text-blue-400 hover:underline" title="Performance improvements + memory leak fix (#3032)">Generate plugin list file (<span class="text-blue-400 group-hover:underline">#4725</span>)</a>
                                    </div>
                                    <div class="w-24 text-right" title="2 months ago">
                                        2 months ago
                                    </div>
                                </div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="Directory" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline text-github-text-color" title="src">src</a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="group hover:text-blue-400 hover:underline" title="Performance improvements + memory leak fix (#3032)">Fix malformed keyframes when using class variants (<span class="text-blue-400 group-hover:underline">#5223</span>)</a>
                                    </div>
                                    <div class="w-24 text-right" title="20 hours ago">
                                        20 hours ago
                                    </div>
                                </div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="Directory" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline text-github-text-color" title="src">stubs</a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="group hover:text-blue-400 hover:underline" title="Performance improvements + memory leak fix (#3032)">Fix backdrop opacity variants (<span class="text-blue-400 group-hover:underline">#4892</span>)</a>
                                    </div>
                                    <div class="w-24 text-right" title="last month">
                                        last month
                                    </div>
                                </div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="Directory" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline text-github-text-color" title="tests">tests</a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="group hover:text-blue-400 hover:underline" title="Performance improvements + memory leak fix (#3032)">Fix malformed keyframes when using class variants (<span class="text-blue-400 group-hover:underline">#5223</span>)</a>
                                    </div>
                                    <div class="w-24 text-right" title="21 hours ago">
                                        21 hours ago
                                    </div>
                                </div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="File" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline text-github-text-color" title=".editorconfig">.editorconfig</a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="group hover:text-blue-400 hover:underline" title="Convert new stuff to use ES6 modules">Convert new stuff to use ES6 modules</a>
                                    </div>
                                    <div class="w-24 text-right" title="4 years ago">
                                        4 years ago
                                    </div>
                                </div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="File" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline text-github-text-color" title=".eslintignore">.eslintignore</a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="group hover:text-blue-400 hover:underline" title="Convert new stuff to use ES6 modules">Generate plugin list file ((<span class="text-blue-400 group-hover:underline">#4725</span>)</a>
                                    </div>
                                    <div class="w-24 text-right" title="2 months ago">
                                        2 months ago
                                    </div>
                                </div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="File" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline text-github-text-color" title=".eslintrc.json">.eslintrc.json</a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="group hover:text-blue-400 hover:underline" title="Fix style">Fix style</a>
                                    </div>
                                    <div class="w-24 text-right" title="5 months ago">
                                        5 months ago
                                    </div>
                                </div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="File" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline text-github-text-color" title="CHANGELOG.md">CHANGELOG.md</a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="group hover:text-blue-400 hover:underline" title="Fix style">Update changelog</a>
                                    </div>
                                    <div class="w-24 text-right" title="7 days ago">
                                        7 days ago
                                    </div>
                                </div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="File" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline text-github-text-color" title="LICENSE">LICENSE</a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="group hover:text-blue-400 hover:underline" title="Avoid updating license every year">Avoid updating license every year</a>
                                    </div>
                                    <div class="w-24 text-right" title="4 years ago">
                                        4 years ago
                                    </div>
                                </div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="File" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline text-github-text-color" title="README.md">README.md</a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="group hover:text-blue-400 hover:underline" title="use actions workflow status in readme badge (#4787)">use actions workflow status in readme badge (<span class="text-blue-400 group-hover:underline">#4787</span>)</a>
                                    </div>
                                    <div class="w-24 text-right" title="2 months ago">
                                        2 months ago
                                    </div>
                                </div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="File" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline text-github-text-color" title="base.css">base.css</a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="group hover:text-blue-400 hover:underline" title="Remove preflight CSS export in favor of base">Remove preflight CSS export in favor of base</a>
                                    </div>
                                    <div class="w-24 text-right" title="3 years ago">
                                        3 years ago
                                    </div>
                                </div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="File" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline text-github-text-color" title="colors.js">colors.js</a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="group hover:text-blue-400 hover:underline" title="Rename lightBlue to sky (#4513)">Rename lightBlue to sky (<span class="text-blue-400 group-hover:underline">#4513</span>)</a>
                                    </div>
                                    <div class="w-24 text-right" title="3 months ago">
                                        3 months ago
                                    </div>
                                </div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="File" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline text-github-text-color" title="components.css">components.css</a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="group hover:text-blue-400 hover:underline" title="Move CSS files to root for easier imports">Move CSS files to root for easier imports</a>
                                    </div>
                                    <div class="w-24 text-right" title="4 years ago">
                                        4 years ago
                                    </div>
                                </div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="File" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline text-github-text-color" title="defaultConfig.js">defaultConfig.js</a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="group hover:text-blue-400 hover:underline" title="Updated CLI init commend">Updated CLI init commend</a>
                                    </div>
                                    <div class="w-24 text-right" title="3 years ago">
                                        3 years ago
                                    </div>
                                </div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="File" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline text-github-text-color" title="defaultTheme.js">defaultTheme.js</a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="group hover:text-blue-400 hover:underline" title="Updated CLI init commend">Updated CLI init commend</a>
                                    </div>
                                    <div class="w-24 text-right" title="3 years ago">
                                        3 years ago
                                    </div>
                                </div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="File" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline text-github-text-color" title="package-lock.json">package-lock.json</a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="group hover:text-blue-400 hover:underline" title="Update eslint to version 7.32.0">Update eslint to version 7.32.0</a>
                                    </div>
                                    <div class="w-24 text-right" title="3 days ago">
                                        3 days ago
                                    </div>
                                </div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="File" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline text-github-text-color" title="package.json">package.json</a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="group hover:text-blue-400 hover:underline" title="Update eslint to version 7.32.0">Update eslint to version 7.32.0</a>
                                    </div>
                                    <div class="w-24 text-right" title="3 days ago">
                                        3 days ago
                                    </div>
                                </div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="File" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline text-github-text-color" title="package.postcss7.json">package.postcss7.json</a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="group hover:text-blue-400 hover:underline" title="Improve production build performance for the case of many small non-t…">Improve production build performance for the case of many small non-t…</a>
                                    </div>
                                    <div class="w-24 text-right" title="2 months ago">
                                        2 months ago
                                    </div>
                                </div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="File" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline text-github-text-color" title="plugin.js">plugin.js</a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="group hover:text-blue-400 hover:underline" title="Add default interop to tailwindcss/plugin">Add <code class="bg-github-bg-gray-button px-1 rounded-md py-1 text-xs">default</code> interop to tailwindcss/plugin</a>
                                    </div>
                                    <div class="w-24 text-right" title="11 months ago">
                                        11 months ago
                                    </div>
                                </div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="File" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline text-github-text-color" title="prettier.config.js">prettier.config.js</a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="group hover:text-blue-400 hover:underline" title="Add Prettier configuration file (prettier.config.js) (#3713)">Add Prettier configuration file (prettier.config.js) (<span class="text-blue-400 group-hover:underline">#3713</span>)</a>
                                    </div>
                                    <div class="w-24 text-right" title="3 months ago">
                                        3 months ago
                                    </div>
                                </div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="File" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline text-github-text-color" title="resolveConfig.js">resolveConfig.js</a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="group hover:text-blue-400 hover:underline" title="Support new presets key + extending core plugins config (#2474)">Support new <code class="bg-github-bg-gray-button px-1 rounded-md py-1 text-xs">presets</code> key + extending core plugins config (<span class="text-blue-400 group-hover:underline">#2474</span>)</a>
                                    </div>
                                    <div class="w-24 text-right" title="10 months ago">
                                        10 months ago
                                    </div>
                                </div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="File" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline text-github-text-color" title="screens.css">screens.css</a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="group hover:text-blue-400 hover:underline" title="Add screen.css file for postcss-import convenience">Add screen.css file for postcss-import convenience</a>
                                    </div>
                                    <div class="w-24 text-right" title="2 years ago">
                                        2 years ago
                                    </div>
                                </div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="File" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline text-github-text-color" title="tailwind.css">tailwind.css</a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="group hover:text-blue-400 hover:underline" title="Undo accidental changes to CDN build process">Undo accidental changes to CDN build process</a>
                                    </div>
                                    <div class="w-24 text-right" title="2 years ago">
                                        2 years ago
                                    </div>
                                </div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="File" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline text-github-text-color" title="utilities.css">utilities.css</a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="group hover:text-blue-400 hover:underline" title="Move CSS files to root for easier imports">Move CSS files to root for easier imports</a>
                                    </div>
                                    <div class="w-24 text-right" title="4 years ago">
                                        4 years ago
                                    </div>
                                </div>
                                <div class="flex items-center border-t border-github-bg-gray-button px-4 py-2 hover:bg-github-bg-gray-button hover:bg-opacity-40 transition duration-150 ease-in">
                                    <div role="gridcell" class="mr-3 flex-shrink text-github-bg-gray" style="width: 16px;">
                                        <svg aria-label="File" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4">
                                            <path fill-rule="evenodd" fill="currentColor" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
                                        </svg>
                                    </div>
                                    <div class="flex flex-auto md:w-2/12 mr-3">
                                        <a href="#" class="hover:text-blue-400 hover:underline text-github-text-color" title="variants.css">variants.css</a>
                                    </div>
                                    <div class="flex flex-auto w-5/12 mr-3">
                                        <a href="#" class="group hover:text-blue-400 hover:underline" title="JIT: Replace @tailwind screens with @tailwind variants (#4356)">JIT: Replace <code class="bg-github-bg-gray-button px-1 rounded-md py-1 text-xs">@tailwind screens</code> with <code class="bg-github-bg-gray-button px-1 rounded-md py-1 text-xs">@tailwind variants</code> (<span class="text-blue-400 group-hover:underline">#4356</span>)</a>
                                    </div>
                                    <div class="w-24 text-right" title="3 months ago">
                                        3 months ago
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="border border-github-border-gray-button mb-4 rounded-md">
                            <div class="flex items-center px-3 py-2 border-b border-github-bg-gray-button">
                                <a href="#" class="text-github-bg-gray p-2 rounded-md hover:bg-github-bg-gray-button mr-2">
                                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-list-unordered">
                                        <path fill-rule="evenodd" fill="currentColor" d="M2 4a1 1 0 100-2 1 1 0 000 2zm3.75-1.5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zM3 8a1 1 0 11-2 0 1 1 0 012 0zm-1 6a1 1 0 100-2 1 1 0 000 2z"></path>
                                    </svg>
                                </a>
                                <a href="#" class="font-semibold text-github-text-color hover:text-blue-400 hover:underline transition duration-150 ease-in">README.md</a>
                            </div>
                            <div class="p-8 text-github-text-color">
                                <div>
                                    <svg viewBox="0 0 273 64" fill="none" class="w-96">
                                        <title>
                                            Tailwind CSS
                                        </title>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M32 16C24.8 16 20.3 19.6 18.5 26.8C21.2 23.2 24.35 21.85 27.95 22.75C30.004 23.2635 31.4721 24.7536 33.0971 26.4031C35.7443 29.0901 38.8081 32.2 45.5 32.2C52.7 32.2 57.2 28.6 59 21.4C56.3 25 53.15 26.35 49.55 25.45C47.496 24.9365 46.0279 23.4464 44.4029 21.7969C41.7557 19.1099 38.6919 16 32 16ZM18.5 32.2C11.3 32.2 6.8 35.8 5 43C7.7 39.4 10.85 38.05 14.45 38.95C16.504 39.4635 17.9721 40.9536 19.5971 42.6031C22.2443 45.2901 25.3081 48.4 32 48.4C39.2 48.4 43.7 44.8 45.5 37.6C42.8 41.2 39.65 42.55 36.05 41.65C33.996 41.1365 32.5279 39.6464 30.9029 37.9969C28.2557 35.3099 25.1919 32.2 18.5 32.2Z" fill="#16BDCA"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M85.996 29.652H81.284V38.772C81.284 41.204 82.88 41.166 85.996 41.014V44.7C79.688 45.46 77.18 43.712 77.18 38.772V29.652H73.684V25.7H77.18V20.596L81.284 19.38V25.7H85.996V29.652ZM103.958 25.7H108.062V44.7H103.958V41.964C102.514 43.978 100.272 45.194 97.308 45.194C92.14 45.194 87.846 40.824 87.846 35.2C87.846 29.538 92.14 25.206 97.308 25.206C100.272 25.206 102.514 26.422 103.958 28.398V25.7ZM97.954 41.28C101.374 41.28 103.958 38.734 103.958 35.2C103.958 31.666 101.374 29.12 97.954 29.12C94.534 29.12 91.95 31.666 91.95 35.2C91.95 38.734 94.534 41.28 97.954 41.28ZM114.902 22.85C113.458 22.85 112.28 21.634 112.28 20.228C112.28 18.784 113.458 17.606 114.902 17.606C116.346 17.606 117.524 18.784 117.524 20.228C117.524 21.634 116.346 22.85 114.902 22.85ZM112.85 44.7V25.7H116.954V44.7H112.85ZM121.704 44.7V16.96H125.808V44.7H121.704ZM152.446 25.7H156.778L150.812 44.7H146.784L142.832 31.894L138.842 44.7H134.814L128.848 25.7H133.18L136.866 38.81L140.856 25.7H144.77L148.722 38.81L152.446 25.7ZM161.87 22.85C160.426 22.85 159.248 21.634 159.248 20.228C159.248 18.784 160.426 17.606 161.87 17.606C163.314 17.606 164.492 18.784 164.492 20.228C164.492 21.634 163.314 22.85 161.87 22.85ZM159.818 44.7V25.7H163.922V44.7H159.818ZM178.666 25.206C182.922 25.206 185.962 28.094 185.962 33.034V44.7H181.858V33.452C181.858 30.564 180.186 29.044 177.602 29.044C174.904 29.044 172.776 30.64 172.776 34.516V44.7H168.672V25.7H172.776V28.132C174.03 26.156 176.082 25.206 178.666 25.206ZM205.418 18.1H209.522V44.7H205.418V41.964C203.974 43.978 201.732 45.194 198.768 45.194C193.6 45.194 189.306 40.824 189.306 35.2C189.306 29.538 193.6 25.206 198.768 25.206C201.732 25.206 203.974 26.422 205.418 28.398V18.1ZM199.414 41.28C202.834 41.28 205.418 38.734 205.418 35.2C205.418 31.666 202.834 29.12 199.414 29.12C195.994 29.12 193.41 31.666 193.41 35.2C193.41 38.734 195.994 41.28 199.414 41.28ZM223.278 45.194C217.54 45.194 213.246 40.824 213.246 35.2C213.246 29.538 217.54 25.206 223.278 25.206C227.002 25.206 230.232 27.144 231.752 30.108L228.218 32.16C227.382 30.374 225.52 29.234 223.24 29.234C219.896 29.234 217.35 31.78 217.35 35.2C217.35 38.62 219.896 41.166 223.24 41.166C225.52 41.166 227.382 39.988 228.294 38.24L231.828 40.254C230.232 43.256 227.002 45.194 223.278 45.194ZM238.592 30.944C238.592 34.402 248.814 32.312 248.814 39.342C248.814 43.142 245.508 45.194 241.404 45.194C237.604 45.194 234.868 43.484 233.652 40.748L237.186 38.696C237.794 40.406 239.314 41.432 241.404 41.432C243.228 41.432 244.634 40.824 244.634 39.304C244.634 35.922 234.412 37.822 234.412 31.02C234.412 27.448 237.49 25.206 241.366 25.206C244.482 25.206 247.066 26.65 248.396 29.158L244.938 31.096C244.254 29.614 242.924 28.93 241.366 28.93C239.884 28.93 238.592 29.576 238.592 30.944ZM256.11 30.944C256.11 34.402 266.332 32.312 266.332 39.342C266.332 43.142 263.026 45.194 258.922 45.194C255.122 45.194 252.386 43.484 251.17 40.748L254.704 38.696C255.312 40.406 256.832 41.432 258.922 41.432C260.746 41.432 262.152 40.824 262.152 39.304C262.152 35.922 251.93 37.822 251.93 31.02C251.93 27.448 255.008 25.206 258.884 25.206C262 25.206 264.584 26.65 265.914 29.158L262.456 31.096C261.772 29.614 260.442 28.93 258.884 28.93C257.402 28.93 256.11 29.576 256.11 30.944Z" fill="#161E2E"/>
                                    </svg>
                                </div>
                                <h2 class="text-base">A utility-first CSS framework for rapidly building custom user interfaces.</h2>
                                <div class="flex items-center space-x-1 mt-4">
                                    <div class="flex items-center space-x-0">
                                        <a href="#" class="text-white rounded-l-md border-none flex items-center bg-github-bg-gray-button px-2 h-6 text-xs">build</a>
                                        <a href="#" class="text-white rounded-r-md border-none flex items-center bg-green-400 px-2 h-6 text-xs">passing</a>
                                    </div>
                                    <div class="flex items-center space-x-0">
                                        <a href="#" class="text-white rounded-l-md border-none flex items-center bg-github-bg-gray-button px-2 h-6 text-xs">downloads</a>
                                        <a href="#" class="text-white rounded-r-md border-none flex items-center bg-green-400 px-2 h-6 text-xs">40M</a>
                                    </div>
                                    <div class="flex items-center space-x-0">
                                        <a href="#" class="text-white rounded-l-md border-none flex items-center bg-github-bg-gray-button px-2 h-6 text-xs">npm</a>
                                        <a href="#" class="text-white rounded-r-md border-none flex items-center bg-blue-400 px-2 h-6 text-xs">v2.2.7</a>
                                    </div>
                                    <div class="flex items-center space-x-0">
                                        <a href="#" class="text-white rounded-l-md border-none flex items-center bg-github-bg-gray-button px-2 h-6 text-xs">license</a>
                                        <a href="#" class="text-white rounded-r-md border-none flex items-center bg-green-400 px-2 h-6 text-xs">MIT</a>
                                    </div>
                                </div>
                                <div class="w-full h-1 bg-github-border-gray-button mt-6"></div>
                                <div class="border-b border-github-border-gray-button border-opacity-70">
                                    <h2 class="text-2xl mt-6 font-medium mb-1">Documentation</h2>
                                </div>
                                <div class="text-base mt-4">
                                    For full documentation, visit
                                    <a href="https://tailwindcss.com/" class="text-blue-400 hover:underline">tailwindcss.com.</a>
                                </div>
                                <div class="border-b border-github-border-gray-button border-opacity-70">
                                    <h2 class="text-2xl mt-6 font-medium mb-1">Community</h2>
                                </div>
                                <div class="flex flex-col space-y-4 text-base mt-4">
                                    <p>For help, discussion about best practices, or any other conversation that would benefit from being searchable:</p>
                                    <a href="https://github.com/tailwindlabs/tailwindcss/discussions" class="text-blue-400 hover:underline">Discuss Tailwind CSS on GitHub</a>
                                    <p>For casual chit-chat with others using the framework:</p>
                                    <a href="https://discord.gg/7NF8GNe" class="text-blue-400 hover:underline">Join the Tailwind CSS Discord Server</a>
                                </div>
                                <div class="border-b border-github-border-gray-button border-opacity-70">
                                    <h2 class="text-2xl mt-6 font-medium mb-1">Contributing</h2>
                                </div>
                                <div class="text-base mt-4">
                                    If you're interested in contributing to Tailwind CSS, please read our
                                    <a href="https://github.com/tailwindlabs/tailwindcss/blob/master/.github/CONTRIBUTING.md" class="text-blue-400 hover:underline">contributing docs </a> <span class="font-semibold">before submitting a pull request.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-3/12 px-4">
                        <div>
                            <div class="about border-b border-github-border-gray-button border-opacity-70 pb-6">
                                <h2 class="text-base font-medium text-github-text-color">About</h2>
                                <p class="mt-4 text-base text-github-text-color">A utility-first CSS framework for rapid UI development.</p>
                                <div class="flex items-center mt-4">
                                    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4 text-github-text-color flex-shrink mr-2">
                                        <path fill-rule="evenodd" fill="currentColor" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
                                    </svg>
                                    <a href="https://tailwindcss.com" class="text-blue-400 font-medium hover:underline">tailwindcss.com/</a>
                                </div>
                                <div class="tags mt-4">
                                    <a href="#" class="inline-block text-blue-400 bg-blue-400 bg-opacity-20 rounded-full px-2 mb-1">css</a>
                                    <a href="#" class="inline-block text-blue-400 bg-blue-400 bg-opacity-20 rounded-full px-2 mb-1">postcss</a>
                                    <a href="#" class="inline-block text-blue-400 bg-blue-400 bg-opacity-20 rounded-full px-2 mb-1">responsive</a>
                                    <a href="#" class="inline-block text-blue-400 bg-blue-400 bg-opacity-20 rounded-full px-2 mb-1">css-framework</a>
                                    <a href="#" class="inline-block text-blue-400 bg-blue-400 bg-opacity-20 rounded-full px-2 mb-1">functional-css</a>
                                    <a href="#" class="inline-block text-blue-400 bg-blue-400 bg-opacity-20 rounded-full px-2 mb-1">utility-classes</a>
                                    <a href="#" class="inline-block text-blue-400 bg-blue-400 bg-opacity-20 rounded-full px-2 mb-1">tailwindcss</a>
                                </div>
                                <div class="group flex items-center mt-4 text-github-secondary-text-color hover:text-blue-400">
                                    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4 flex-shrink mr-3">
                                        <path fill-rule="evenodd" fill="currentColor" d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path>
                                    </svg>
                                    <a href="https://github.com/tailwindlabs/tailwindcss#readme" class="">Readme</a>
                                </div>
                                <div class="group flex items-center mt-4 text-github-secondary-text-color hover:text-blue-400">
                                    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="h-4 w-4 flex-shrink mr-3">
                                        <path fill-rule="evenodd" fill="currentColor" d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"></path>
                                    </svg>
                                    <a href="https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE" class="">MIT License</a>
                                </div>
                            </div>
                            <div class="releases mt-6 border-b border-github-border-gray-button border-opacity-70 pb-6">
                                <div class="flex items-center">
                                    <a href="https://github.com/tailwindlabs/tailwindcss/releases" class="text-base font-medium text-github-text-color hover:text-blue-400">Releases</a>
                                    <div class="rounded-xl bg-github-bg-gray-button px-2 text-xs text-github-text-color py-1 ml-1.5 font-medium">161</div>
                                </div>
                                <a href="https://github.com/tailwindlabs/tailwindcss/releases/tag/v2.2.7" class="group flex mt-4">
                                    <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="w-4 h-4 mr-2 text-github-primary-bg-hover group-hover:text-blue-400">
                                        <path fill-rule="evenodd" fill="currentColor" d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"></path>
                                    </svg>
                                    <div>
                                        <div class="flex items-center">
                                            <span class="font-medium text-github-text-color group-hover:text-blue-400 mr-2">v2.2.7</span>
                                            <span class="text-github-primary-bg-hover border border-github-primary-bg-hover rounded-xl px-2 py-0.5 text-xs">Latest</span>
                                        </div>
                                        <span class="text-xs mt-2 group-hover:text-blue-400">8 days ago</span>
                                    </div>
                                </a>
                                <a href="https://github.com/tailwindlabs/tailwindcss/releases" class="block text-xs mt-4 text-blue-400 hover:underline">+ 160 releases</a>
                            </div>
                            <div class="releases mt-6 border-b border-github-border-gray-button border-opacity-70 pb-6">
                                <a href="https://github.com/orgs/tailwindlabs/packages?repo_name=tailwindcss" class="text-base font-medium text-github-text-color hover:text-blue-400">Packages</a>
                                <p class="block text-xs mt-4">No packages published</p>
                            </div>
                            <div class="releases mt-6 border-b border-github-border-gray-button border-opacity-70 pb-6">
                                <div class="flex items-center">
                                    <a href="https://github.com/tailwindlabs/tailwindcss/network/dependents?package_id=UGFja2FnZS0zNzMwOTM5OA%3D%3D" class="text-base font-medium text-github-text-color hover:text-blue-400">Used by</a>
                                    <div class="rounded-xl bg-github-bg-gray-button px-2 text-xs text-github-text-color py-1 ml-1.5 font-medium">272k</div>
                                </div>
                                <div class="flex items-center mt-4">
                                    <a href="https://github.com/tailwindlabs/tailwindcss/network/dependents?package_id=UGFja2FnZS0zNzMwOTM5OA%3D%3D" class="group flex items-center">
                                        <div class="flex items-center -space-x-2">
                                            <img src="~assets/img/testimonials/testimonials-1.jpg" alt="tesmtimonial 1" class="h-9 w-9 rounded-full border-2 border-github-background" />
                                            <img src="~assets/img/testimonials/testimonials-2.jpg" alt="tesmtimonial 2" class="h-9 w-9 rounded-full border-2 border-github-background" />
                                            <img src="~assets/img/testimonials/testimonials-3.jpg" alt="tesmtimonial 3" class="h-9 w-9 rounded-full border-2 border-github-background" />
                                            <img src="~assets/img/testimonials/testimonials-4.jpg" alt="tesmtimonial 4" class="h-9 w-9 rounded-full border-2 border-github-background" />
                                            <img src="~assets/img/testimonials/testimonials-5.jpg" alt="tesmtimonial 5" class="h-9 w-9 rounded-full border-2 border-github-background" />
                                            <img src="~assets/img/team/team-1.jpg" alt="team 1" class="h-9 w-9 rounded-full border-2 border-github-background" />
                                        </div>
                                        <span class="text-blue-400 group-hover:underline text-xs ml-2">+ 271,618</span>
                                    </a>
                                </div>
                            </div>
                            <div class="releases mt-6 border-b border-github-border-gray-button border-opacity-70 pb-6">
                                <div class="flex items-center">
                                    <a href="https://github.com/tailwindlabs/tailwindcss/network/dependents?package_id=UGFja2FnZS0zNzMwOTM5OA%3D%3D" class="text-base font-medium text-github-text-color hover:text-blue-400">Contributors</a>
                                    <div class="rounded-xl bg-github-bg-gray-button px-2 text-xs text-github-text-color py-1 ml-1.5 font-medium">184</div>
                                </div>
                                <div class="flex items-center flex-wrap mt-4">
                                    <a href="https://github.com/testimonials-1" class="inline-block ">
                                        <img src="~assets/img/testimonials/testimonials-1.jpg" alt="tesmtimonial 1" class="h-9 w-9 rounded-full mr-2 mb-2" />
                                    </a>
                                    <a href="https://github.com/testimonials-2" class="inline-block ">
                                        <img src="~assets/img/testimonials/testimonials-2.jpg" alt="tesmtimonial 2" class="h-9 w-9 rounded-full mr-2 mb-2" />
                                    </a>
                                    <a href="https://github.com/testimonials-3" class="inline-block ">
                                        <img src="~assets/img/testimonials/testimonials-3.jpg" alt="tesmtimonial 3" class="h-9 w-9 rounded-full mr-2 mb-2" />
                                    </a>
                                    <a href="https://github.com/testimonials-4" class="inline-block ">
                                        <img src="~assets/img/testimonials/testimonials-4.jpg" alt="tesmtimonial 4" class="h-9 w-9 rounded-full mr-2 mb-2" />
                                    </a>
                                    <a href="https://github.com/testimonials-5" class="inline-block ">
                                        <img src="~assets/img/testimonials/testimonials-5.jpg" alt="tesmtimonial 5" class="h-9 w-9 rounded-full mr-2 mb-2" />
                                    </a>
                                    <a href="https://github.com/team-1" class="inline-block ">
                                        <img src="~assets/img/team/team-1.jpg" alt="team 1" class="h-9 w-9 rounded-full mr-2 mb-2" />
                                    </a>
                                    <a href="https://github.com/team-2" class="inline-block ">
                                        <img src="~assets/img/team/team-2.jpg" alt="team 2" class="h-9 w-9 rounded-full mr-2 mb-2" />
                                    </a>
                                    <a href="https://github.com/team-3" class="inline-block ">
                                        <img src="~assets/img/team/team-3.jpg" alt="team 3" class="h-9 w-9 rounded-full mr-2 mb-2" />
                                    </a>
                                </div>
                                <a href="https://github.com/tailwindlabs/tailwindcss/graphs/contributors" class="block text-xs mt-4 text-blue-400 hover:underline">+ 173 contributors</a>
                            </div>
                            <div class="releases mt-6">
                                <a href="https://github.com/tailwindlabs/tailwindcss/network/dependents?package_id=UGFja2FnZS0zNzMwOTM5OA%3D%3D" class="text-base font-medium text-github-text-color hover:text-blue-400 block mb-3">Languages</a>
                                <div class="mb-2">
                                    <div class="rounded-lg h-2 w-full flex space-x-0.5">
                                        <div style="background-color: #f1e05a; width: 83.4%;" class="rounded-l-lg h-full"></div>
                                        <div style="background-color: #563d7c; width: 12.4%;" class="h-full"></div>
                                        <div style="background-color: #e34c26; width: 4.1%;" class="h-full"></div>
                                        <div style="background-color: #ededed; width: 0.1%;" class="h-full rounded-r-lg"></div>
                                    </div>
                                </div>
                                <ul class="list-none">
                                    <li class="inline-block mr-5">
                                        <a href="https://github.com/tailwindlabs/tailwindcss/search?l=javascript" class="flex items-center group">
                                            <span class="h-2 w-2 rounded-full mr-3" style="background-color: #f1e05a;"></span>
                                            <span class="text-github-text-color font-medium mr-1 group-hover:text-blue-400">JavaScript</span>
                                            <span class="group-hover:text-blue-400">83.4%</span>
                                        </a>
                                    </li>
                                    <li class="inline-block mr-5">
                                        <a href="https://github.com/tailwindlabs/tailwindcss/search?l=css" class="flex items-center group">
                                            <span class="h-2 w-2 rounded-full mr-3" style="background-color: #563d7c;"></span>
                                            <span class="text-github-text-color font-medium mr-1 group-hover:text-blue-400">CSS</span>
                                            <span class="group-hover:text-blue-400">12.4%</span>
                                        </a>
                                    </li>
                                    <li class="inline-block mr-5">
                                        <a href="https://github.com/tailwindlabs/tailwindcss/search?l=html" class="flex items-center group">
                                            <span class="h-2 w-2 rounded-full mr-3" style="background-color: #e34c26;"></span>
                                            <span class="text-github-text-color font-medium mr-1 group-hover:text-blue-400">HTML</span>
                                            <span class="group-hover:text-blue-400">4.1%</span>
                                        </a>
                                    </li>
                                    <li class="inline-block mr-5">
                                        <a href="https://github.com/tailwindlabs/tailwindcss/search?l=other" class="flex items-center group">
                                            <span class="h-2 w-2 rounded-full mr-3" style="background-color: #ededed;"></span>
                                            <span class="text-github-text-color font-medium mr-1 group-hover:text-blue-400">Other</span>
                                            <span class="group-hover:text-blue-400">0.1%</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <div class="footer max-w-container-xl mx-auto px-3 mt-6">
            <div class="border-t border-github-border-gray-button border-opacity-70 flex items-center justify-between py-9 text-github-secondary-text-color text-xs">
                <div class="flex items-center justify-between w-5/12">
                    <span>© 2021 GitHub, Inc.</span>
                    <a href="https://docs.github.com/en/github/site-policy/github-terms-of-service" target="_blank" class="text-blue-400 hover:underline">Terms</a>
                    <a href="https://docs.github.com/en/github/site-policy/github-privacy-statement" target="_blank" class="text-blue-400 hover:underline">Privacy</a>
                    <a href="https://github.com/security" class="text-blue-400 hover:underline" target="_blank">Security</a>
                    <a href="https://www.githubstatus.com/" class="text-blue-400 hover:underline" target="_blank">Status</a>
                    <a href="https://docs.github.com/en" class="text-blue-400 hover:underline" target="_blank">Docs</a>
                </div>
                <div class="flex items-center justify-center">
                    <a href="https://www.github.com" class="hover:text-gray-200 transition duration-150 ease-in">
                        <svg class="w-6 h-6" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" fill="none">
                            <path fill-rule="evenodd" fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                    </a>
                </div>
                <div class="flex items-center justify-between w-5/12">
                    <a href="https://support.github.com" target="_blank" class="text-blue-400 hover:underline">Contact GitHub</a>
                    <a href="https://github.com/pricing" target="_blank" class="text-blue-400 hover:underline">Pricing</a>
                    <a href="https://docs.github.com" class="text-blue-400 hover:underline" target="_blank">API</a>
                    <a href="https://services.github.com" class="text-blue-400 hover:underline" target="_blank">Training</a>
                    <a href="https://github.blog" class="text-blue-400 hover:underline" target="_blank">Blog</a>
                    <a href="https://github.com/about" class="text-blue-400 hover:underline" target="_blank">About</a>
                </div>
            </div>
        </div>
    </div>
</template>
