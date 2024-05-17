import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <div class="grid grid-rows-1 grid-cols-[60%_40%] gap-0 h-screen">
      <div class="flex flex-col items-center justify-center">
        <router-outlet />
      </div>
      <div
        class="bg-gradient-to-r h-100 from-green-400 via-cyan-900 to-blue-500 text-white flex flex-col justify-center items-center gap-4 px-8"
      >
        <p class="text-4xl font-bold">New Here?</p>
        <p class="text-xl text-center">
          Sign up and discover a great amount of new opportunities!
        </p>
        <button class="bg-white text-gray-900 rounded-full px-16 py-4
          hover:bg-gray-200 transition duration-300 ease-in-out
        ">
          Sign up
        </button>
      </div>
    </div>
  `,
})
export default class AuthContainer {
  @Input({ required: true })
  details!: AuthScreenDetails;
}

export type AuthScreenDetails = {
  title: string;
  description: string;
  link: string;
  linkText: string;
};
