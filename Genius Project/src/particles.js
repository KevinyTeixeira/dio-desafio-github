/*******************************************/
/* 999. PARTICLES SCRIPT
/*******************************************/

// Particles.
var colors = ['#ed1414', '#47ed14', '#1459ed', '#ede914', '#FFF']

var Particle = function (x, y) {
    this.alive = true

    this.radius = Math.random() * 20

    this.drag = Math.random()
    this.theta = Math.random() * (2 * Math.PI)
    this.wander = 0.1

    this.color = colors[Math.floor(Math.random() * colors.length)]

    this.opacity = 0
    this.opacityMax = Math.random() * 1

    this.x = x
    this.y = y

    this.vx = 0
    this.vy = 0

    return this
}

Particle.prototype.check = function () {
    if (this.x > window.innerWidth) {
        this.x = 0
    } else if (this.x < 0) {
        this.x = window.innerWidth
    }

    if (this.y > window.innerHeight) {
        this.y = 0
    } else if (this.y < 0) {
        this.y = window.innerHeight
    }
}

Particle.prototype.move = function () {
    this.x += this.vx
    this.y += this.vy

    this.vx *= this.drag
    this.vy *= this.drag

    this.theta += Math.random() * 0.5 * this.wander

    this.vx += Math.sin(this.theta) * 0.1
    this.vy += Math.cos(this.theta) * 0.1

    this.radius *= 0.99

    this.opacity += (this.opacity < this.opacityMax) ? 0.01 : 0

    this.alive = this.radius > 0.5
}

Particle.prototype.render = function (context) {
    context.globalAlpha = this.opacity
    context.globalCompositeOperation = 'lighter'

    context.beginPath()
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)

    context.fillStyle = this.color
    context.fill()

    context.globalAlpha = 1
    context.globalCompositeOperation = 'source-over'
}

// Canvas.
var canvas = document.createElement('canvas')
var context = canvas.getContext('2d')

canvas.style.left = 0
canvas.style.top = 0
canvas.style.position = 'absolute'
canvas.style.height = window.innerHeight + 'px'
canvas.style.width = window.innerWidth + 'px'

canvas.className = 'canvas-particles'

canvas.height = window.innerHeight
canvas.width = window.innerWidth

document.body.appendChild(canvas)

context.fillRect(0, 0, window.innerWidth, window.innerHeight)

var particles = []
var particlesLength = 250
var particleCreate = function () {
    var x = Math.random() * window.innerWidth
    var y = Math.random() * window.innerHeight

    var particle = new Particle(x, y)

    return particle
}

for (var i = 0; i <= particlesLength; i++) {
    particles.push(particleCreate())
}

(function update() {
    context.clearRect(0, 0, canvas.width, canvas.height)

    for (var i = 0; i <= particlesLength; i++) {
        if (particles[i].alive) {
            particles[i].check()
            particles[i].move()
            particles[i].render(context)
        } else {
            particles.splice(i, 1)
            particles.push(particleCreate())
        }
    }

    requestAnimationFrame(update)
})()

window.addEventListener('resize', function () {
    canvas.style.width = window.innerWidth + 'px'
    canvas.style.height = window.innerHeight + 'px'

    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
})