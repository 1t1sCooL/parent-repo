import { slugify } from '@parent-repo/utils';

    export function Button(text) {
      const id = slugify(text);
      return `<button id="${id}">${text}</button>`;
    }