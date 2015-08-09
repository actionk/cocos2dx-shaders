varying vec4 v_fragmentColor;
varying vec2 v_texCoord;

uniform float u_ctime;
uniform float u_gtime;
uniform float u_radius;
uniform vec4 u_color;

/*
void main() {
	vec4 tex = texture2D(CC_Texture0, v_texCoord);
	tex = tex + vec4(1.0, 0.0, 0.0, 0.0) * tex.a;
	gl_FragColor = tex * v_fragmentColor;
}
*/

void main()
{
	float radius = u_radius;
	
    vec4 accum = vec4(0.0);
    vec4 normal = vec4(0.0);
    
    //normal = texture2D(CC_Texture0, vec2(v_texCoord.x, v_texCoord.y));
    normal = texture2D(CC_Texture0, v_texCoord);
    
    for(float i = 1.0; i <= radius; i += 1.0)
    {
    	accum += texture2D(CC_Texture0, vec2(v_texCoord.x - 0.01 * i, v_texCoord.y - 0.01 * i));
	    accum += texture2D(CC_Texture0, vec2(v_texCoord.x + 0.01 * i, v_texCoord.y - 0.01 * i));
	    accum += texture2D(CC_Texture0, vec2(v_texCoord.x + 0.01 * i, v_texCoord.y + 0.01 * i));
	    accum += texture2D(CC_Texture0, vec2(v_texCoord.x - 0.01 * i, v_texCoord.y + 0.01 * i));
    }
    
    accum.rgb =  u_color.rgb * u_color.a * accum.a * 0.95;
    float opacity = ((1.0 - normal.a) / radius) * (u_ctime / u_gtime);
    
    normal = (accum * opacity) + (normal * normal.a);
    
    gl_FragColor = v_fragmentColor * normal;
}