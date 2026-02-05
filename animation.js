// canvas fill
const BACKGROUND   = "#fffff044"

// line strokes
const FOREGROUND_1 = "#ffffffff"
const FOREGROUND_2 = "#000c0f10"
const LINE_WIDTH   = 1.5


const ctx = game.getContext("2d")
ctx.imageSmoothingEnabled = false


function clear() {
    ctx.fillStyle = BACKGROUND
    ctx.fillRect(0, 0, game.width, game.height)
}

function point({x, y}, size, color) {
    ctx.fillStyle = color
    ctx.fillRect(x - size / 2, y - size / 2, size, size)
	//const circle = new Path2D();
	//circle.arc(x, y, size, 0, 2 * Math.PI);
	//ctx.fill(circle);
}

function line({p1, p2}, color) {
    ctx.lineWidth = LINE_WIDTH;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
}

function screen(p) {
    // -1..1 => 0..2 => 0..1 => 0..w
    return {
        x: (p.x + 1) / 2 * game.width,
        y: (1 - (p.y + 1) / 2) * game.height,
    }
}

function project({x, y, z}) {
    return {
        x: x / z,
        y: (y - 0.5) / z,
    }
}

const FPS = 60;


function translate_z({x, y, z}, dz) {
    return {x, y, z: z + dz};
}

function rotate_xz({x, y, z}, angle) {
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    return {
        x: x * c - z * s,
        y,
        z: x * s + z * c,
    };
}

let dz = 1;
let angle = 0;

function frame() {
    const dt = 1/FPS;
    angle += Math.PI * dt;
    clear()
    for (const v of vs) {
		let point_size = 1 / translate_z(rotate_xz(v, Math.PI - angle), dz).z * 5.0 - 2.5
		if (point_size >= 0) {
        	point(screen(project(translate_z(rotate_xz(v, Math.PI - angle), dz))), point_size, "#ff000077")
		}
    }
	
    for (const f of fs) {
        for (let i = 0; i < f.length; ++i) {

            const a = vs[f[i]];
            const b = vs[f[(i + 1)%f.length]];
			//console.log(f, a, b)
            line({p1: screen(project(translate_z(rotate_xz(a, Math.PI), dz))),
                 p2: screen(project(translate_z(rotate_xz(b, angle), dz)))}, FOREGROUND_1)

        }
    }
	
    for (const f of red_fs) {
        for (let i = 0; i < f.length; ++i) {
            const a = vs[f[i]];
            const b = vs[f[(i + 1)%f.length]];
			//console.log(f, a, b)
            line({p1: screen(project(translate_z(rotate_xz(a, angle), dz))),
                 p2: screen(project(translate_z(rotate_xz(b, Math.PI - angle), dz)))}, FOREGROUND_2)
        }
    }

    setTimeout(frame, 1000/FPS);
}
setTimeout(frame, 1000/FPS);

ctx.scale(2, 1)
