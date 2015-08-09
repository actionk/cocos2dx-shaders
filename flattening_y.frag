varying vec4 v_fragmentColor;
varying vec2 v_texCoord;

uniform float u_ctime;
uniform float u_gtime;

float easeInOutQuad(float t, float b, float c, float d)
{
    t /= d/2.0;
    if (t < 1.0) return c/2.0*t*t + b;
    t--;
    return -c/2.0 * (t*(t-2.0) - 1.0) + b;
}

void main() {
	float progress = u_ctime / u_gtime;
	progress = easeInOutQuad(u_ctime, 0.0, 1.0, u_gtime);
	vec2 coord = v_texCoord;
	
	float coeff = 1.5;
	float diff = 0.5 - abs(0.5 - coord.y);
	if (coord.y > 0.5) {
		coord.y += diff * coeff * progress * abs(coord.y - 0.5) * 2.0;
	} else {
		coord.y -= diff * coeff * progress * abs(coord.y - 0.5) * 2.0;
	}
	vec4 tex = texture2D(CC_Texture0, coord);
	gl_FragColor = tex * v_fragmentColor;
}