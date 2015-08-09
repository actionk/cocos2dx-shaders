varying vec4 v_fragmentColor;
varying vec2 v_texCoord;

uniform float u_ctime;

#define M_PI 3.1415926535897932384626433832795

void main() {
	vec2 coord = v_texCoord;
	coord.x += (sin(coord.y * 10.0 + u_ctime * 10.0) / 30.0);
	gl_FragColor = texture2D(CC_Texture0, coord);
}