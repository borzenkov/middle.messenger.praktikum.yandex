import precss from "precss";
import nested from "postcss-nested";

const config = {
    plugins: [
        precss({/* ...options */}),
        nested({})
    ]
}

export default config;
