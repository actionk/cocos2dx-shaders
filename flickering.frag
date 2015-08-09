varying vec4 v_fragmentColor;
varying vec2 v_texCoord;

uniform float u_ctime;
uniform float u_gtime;

float easeOutQuad(float t, float b, float c, float d)
{
    t /= d;
    return -c * t*(t-2.0) + b;
}

float easeInOutQuad(float t, float b, float c, float d)
{
    t /= d/2.0;
    if (t < 1.0) return c/2.0*t*t + b;
    t--;
    return -c/2.0 * (t*(t-2.0) - 1.0) + b;
}

float easeInCubic(float t, float b, float c, float d) {
	t /= d;
	return c*t*t*t + b;
}

float easeOutCubic(float t, float b, float c, float d) {
	t /= d;
	t--;
	return c*(t*t*t + 1.0) + b;
}

void main() {
	vec4 tex = texture2D(CC_Texture0, v_texCoord);
	vec4 color = vec4(1.0, 1.0, 0.35, 1.0);
	
	float progress = easeOutCubic(u_ctime, -2.0, 3.0, u_gtime);
	progress += v_texCoord.y;
	
	float diff = v_texCoord.x - progress;
	if (diff <= 0.8 && diff > 0.0) {
		tex = tex + (color * diff) * tex.a;
	}
	gl_FragColor = tex * v_fragmentColor;
}