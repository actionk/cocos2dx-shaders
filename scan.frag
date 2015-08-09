varying vec4 v_fragmentColor;
varying vec2 v_texCoord;

uniform float u_ctime;
uniform float u_gtime;
uniform float u_radius;

/*
void main() {
	vec2 unit = 1.0 / resolution.xy;
	vec4 tex = texture2D(CC_Texture0, v_texCoord);
	
	float progress = (u_ctime / u_gtime);
	
	float diff = abs(v_texCoord.x - progress);
	if (diff <= unit.x * 15.0) {
		tex = tex + vec4((diff / (unit.x * 15.0)), 0.0, 0.0, 0.0) * tex.a;
	}
	gl_FragColor = tex * v_fragmentColor;
}
*/

// VERSION 2 (one line)
void main() {
	vec4 tex = texture2D(CC_Texture0, v_texCoord);
	
	float progress = (u_ctime / u_gtime);
	
	float diff = v_texCoord.x - progress;
	if (diff <= 0.15 && diff > 0.0) {
		tex = tex + vec4((diff / 0.15), 0.0, 0.0, 0.0) * tex.a;
	}
	gl_FragColor = tex * v_fragmentColor;
}