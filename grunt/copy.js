module.exports = {
    angular: {
        files: [
            {expand: true, src: "**", cwd: 'bower_components/bootstrap/fonts',         dest: "angular/fonts"},
            {expand: true, src: "**", cwd: 'bower_components/font-awesome/fonts',      dest: "angular/fonts"},
            {expand: true, src: "**", cwd: 'app/data',     dest: "angular/data"},
            {expand: true, src: "**", cwd: 'app/img',     dest: "angular/img"},
            {expand: true, src: "**", cwd: 'app/js',      dest: "angular/js"},
            {expand: true, src: "**", cwd: 'app/partials',     dest: "angular/partials"},
            {src: 'app/index.min.html', dest : 'angular/index.html'},
        ]
    }
};
