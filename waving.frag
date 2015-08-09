varying vec4 v_fragmentColor;
varying vec2 v_texCoord;

uniform float u_wind;

float easeInCubic(float t, float b, float c, float d) {
	t /= d;
	return c*t*t*t + b;
}

void main() {
	vec2 coord = v_texCoord;
	float wind = u_wind - 0.5;
	coord.x += wind * easeInCubic(1.0 - coord.y, 0.0, 1.0, 1.0);
	vec4 tex = texture2D(CC_Texture0, coord);
	gl_FragColor = tex * v_fragmentColor;
}