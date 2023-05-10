import { Fragment, ReactElement, ReactNode } from "react";
import { Dialog as DialogHui, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

type DialogProps = {
  open: boolean;
  onClose: () => void;
  header: () => ReactElement;
  children: ReactNode;
};

export default function Dialog({
  open,
  onClose,
  header,
  children,
}: DialogProps) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <DialogHui as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-stone-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogHui.Panel className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                {/* Close button */}
                <div className="absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="rounded-lg bg-keystatic-gray p-3 hover:bg-stone-300 hover:text-stone-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
                <header className="bg-keystatic-gray-light p-6 sm:p-10">
                  {header()}
                </header>
                <section className="relative">
                  <svg
                    className="absolute inset-0 top-0"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 592 30"
                  >
                    <path
                      className="fill-keystatic-gray-light"
                      fill="currentColor"
                      d="M1025.52 29.363c12.63-.533 27.09-1.599 32.33-2.398 4.92-.8 15.08-1.732 22.16-1.998 7.08-.267 15.09-1.2 17.55-2.132 5.85-2.131 41.25-5.595 43.41-4.13.61.534 9.23.4 19.09-.133 25.24-1.465 128.68-1.998 147.15-.799 8.31.666 32.02 1.066 52.34 1.066 20.31 0 41.86.533 48.33 1.199 38.17 4.53 88.05 5.195 105.29 1.465 7.08-1.465 17.54-2.93 23.7-3.463 9.24-.533 11.7-1.466 12.93-4.396.92-2.265-.61-4.796-4.31-7.06-3.39-2.132-6.77-7.061-7.7-11.724-1.23-4.662-3.69-8.259-6.15-8.659-2.47-.4-4-3.73-4.31-9.724-1.23-25.178-2.47-31.972-5.85-34.902-2.46-1.998-3.39-5.196-1.85-9.059 1.23-3.996.62-6.527-1.85-7.993-4.61-2.264-4.31-9.325.31-11.723 1.54-.932 2.16-1.998 1.23-2.397-4-1.732 1.85-7.194 9.85-8.926 11.4-2.797 20.32-11.456 17.86-17.717-1.23-3.863-.62-5.728 3.69-7.727 3.08-1.465 3.7-2.531 1.85-2.531-5.54 0-4.31-8.659.93-10.657 2.77-.932 3.69-2.265 2.46-2.797-1.23-.533-1.54-5.729-.31-11.457 1.23-5.728 2.46-13.055 3.08-16.385.92-3.33-.62-7.993-3.08-10.657-2.77-2.531-4.31-5.196-4-5.862.31-.666-.31-2.131-1.54-3.33-3.39-3.464-4.62-5.728-6.16-11.989-.92-3.331-2.77-6.661-4.62-7.594-2.15-1.065-1.54-3.063 1.54-6.261 5.24-5.461 2.16-7.593-10.77-7.593-4.62 0-8.93-.666-9.55-1.332-.61-.932-11.39-1.066-33.24-.266-31.71 1.065-62.5.266-83.12-2.265-5.85-.666-20.63-2.531-32.33-4.13-12.01-1.465-27.09-3.064-33.86-3.33-6.47-.4-14.78-1.465-18.47-2.531-9.86-2.664-19.71-3.73-46.18-4.796-53.26-2.131-86.82-4.129-100.06-5.994-7.69-1.066-23.7-2.132-35.4-2.265-18.16-.133-23.7.4-35.4 3.33-7.7 1.865-21.55 3.997-30.79 4.663-25.55 1.998-162.854.266-189.33-2.398-8.62-.799-34.48-1.465-58.492-1.199-23.705.133-79.427.133-123.451.133-74.808-.266-81.581-.4-95.435-3.064-13.545-2.531-21.858-2.93-84.352-3.33-52.644-.4-74.809 0-92.357 1.465-20.318 1.732-55.722 2.398-123.142 2.132-11.083-.134-33.557 1.065-49.873 2.531-16.316 1.465-40.021 2.664-52.643 2.664-28.939 0-70.191 3.33-86.508 6.927-12.314 2.798-14.161 2.798-61.879 1.332-64.957-2.131-109.596 0-146.847 7.061-32.632 6.127-43.407 9.857-48.025 16.518-5.234 7.46-4.926 24.778.615 32.638 3.695 5.062 4.003 8.792 1.848 15.985-2.463 8.792-1.847 17.185 1.847 24.378.615 1.599 4.618 4.397 8.62 5.995 4.002 1.732 8.004 4.529 8.927 6.394 2.156 3.864-7.388 15.72-24.32 30.24-9.544 7.993-11.083 10.39-9.852 15.586 1.232 3.863.308 6.927-2.462 8.526-3.694 2.398-7.697 28.241-4.31 28.241.923 0 1.847 1.066 2.155 2.398.615 2.664 3.694 10.124 5.849 14.654.924 2.131 3.386 2.93 9.851 2.93 14.47 0 22.166 1.466 22.166 4.263 0 1.332 3.386 4.663 7.696 7.327 5.542 3.73 6.773 5.462 4.31 7.327-1.539 1.332-4.618 2.398-6.773 2.398-6.772 0 4.926 2.53 22.474 4.795 21.242 2.798 58.492 3.33 58.492.8 0-1.066 1.54-1.333 3.695-.667C-25.804 6.05 12.678 6.716 94.26 7.25c43.099.267 68.651 1.865 81.581 4.796 3.079.666 11.391 1.465 18.78 1.865 7.388.266 21.857 1.865 31.709 3.33 10.159 1.599 20.934 2.531 24.013 1.998 3.078-.4 5.541-.133 5.541.533 0 1.732 21.858 1.732 26.783.133 2.155-.932 4.31-.799 5.542 0 1.231.933 4.618.667 10.159-.932 12.622-3.597 68.96-5.595 86.815-3.197 7.697 1.066 15.085 2.398 16.932 2.93 1.54.533 13.854 1.333 26.784 1.866 13.238.532 29.246 1.731 35.403 2.664 6.465.932 17.24 1.465 24.321 1.066 8.62-.267 14.161.133 17.24 1.598 4.002 1.599 8.312 1.732 24.32.8 10.775-.667 46.794-1.6 79.735-1.999 32.94-.533 67.42-1.066 76.656-1.332 8.928-.266 20.011.133 24.628.666 14.778 2.132 41.253 2.798 132.686 3.33 80.658.4 108.673.933 147.771 2.532 5.849.266 21.241 0 33.861-.533Z"
                    />
                  </svg>

                  {/* Arrow */}
                  <svg
                    className="absolute right-24 top-4 w-6 -translate-y-1/2 sm:w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 54 124"
                  >
                    <path
                      fill="#000"
                      d="M13.169 122.883c9.665-2.25 26.865-6.787 27.626-7.274.457-.3 1.218-1.313 1.674-2.25.837-1.687.837-1.837.267-3.037-1.37-2.812-4.68-3.15-12.748-1.275-2.968.675-5.518 1.125-5.67.975-.342-.3.19-1.237 4.87-8.324 12.33-18.823 19.674-35.359 22.947-51.82 1.484-7.311 1.826-10.648 1.864-16.948.038-9.599-1.598-17.323-5.06-23.96-3.35-6.411-3.768-6.899-6.66-8.061-1.408-.563-2.626-.975-2.664-.9-.038.075.495 2.062 1.18 4.424 5.67 19.16 5.708 32.434.114 51.482C38.131 65.44 32.538 78 26.221 88.95c-4.072 7.012-13.585 20.323-15.26 21.373-.19.112-.456-1.05-.608-2.7-.457-5.137-1.37-12.936-1.789-15.073-.951-5.025-1.94-6.6-5.137-8.212l-1.598-.75-.19 1.013c-.38 1.612-.99 12.148-1.408 23.397-.343 9.524-.343 10.574.266 12.374 1.37 3.937 4.11 4.499 12.672 2.512Z"
                    />
                  </svg>
                  <div className="p-6 sm:p-10">{children}</div>
                </section>
              </DialogHui.Panel>
            </Transition.Child>
          </div>
        </div>
      </DialogHui>
    </Transition.Root>
  );
}