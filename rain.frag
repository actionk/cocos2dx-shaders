varying vec4 v_fragmentColor;
varying vec2 v_texCoord;

uniform float u_random;

void main()
{
    vec4 color;
    
    float random = mod(u_random, 0.04);
    if (mod(floor((v_texCoord.x + v_texCoord.y / 3.0 - random) * 1000.0), 30.0) == 1.0 && 
        mod(floor((random * 2.0 + v_texCoord.y) * 1000.0), 70.0) < 15.0
    ) {
        color = v_fragmentColor * vec4(0.5, 0.5, 1.0, 0.1) * 0.5;
    } else {
        color = v_fragmentColor * 0.0;
    }
    gl_FragColor = color;
}