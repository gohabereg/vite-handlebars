import { HelperOptions } from 'handlebars';

export default function card(this: object, { fn }: HelperOptions): string {
    // language=hbs
    return `
        <div class="card">
            ${fn(this)}
        </div>
    `
}