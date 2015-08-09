varying vec4 v_fragmentColor;
varying vec2 v_texCoord;

uniform vec4 u_color;

void main() {
	vec4 tex = texture2D(CC_Texture0, v_texCoord);
	tex = tex + u_color * u_color.a * tex.a;
	gl_FragColor = tex * v_fragmentColor;
}