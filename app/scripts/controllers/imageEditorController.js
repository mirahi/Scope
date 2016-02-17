'use strict';

angular.module('scopeApp')
    .controller('imageEditorController', function ($scope) {

        $scope.setImageFile = function (element) {
            // $scope.init();
            // get the image from element
            // start to put the file into canvas element
            // fileReader
            // onload event
            var reader = new FileReader();
            reader.onload = function (e) {
                //set img src
                $scope.image.src = e.target.result;
            };
            reader.readAsDataURL(element.files[0]);
            $scope.image.onload = $scope.resetImage;
            console.log(element);
            
        };


        $scope.init = function () {
            // initialize default values for variables
            $scope.brightness = 0;
            $scope.contrast = 1;
            $scope.strenght = 1;
            $scope.color = {
                red: 255,
                green: 189,
                blue: 0
            };

            $scope.autocontrast = false;
            $scope.vignette = false;
            $scope.canvas = angular.element('#myCanvas')[0];
            $scope.ctx = $scope.canvas.getContext('2d'); // get 2d context of canvas
            $scope.image = new Image();

            $scope.vignImage = new Image();
            
            
            
            
            

        };

        $scope.init();

        $scope.resetImage = function () {
            // when image date is loaded, (after on load)
            // put the data into canvas element
            // Read pixel data
            
            // Set size to match canvas size
            $scope.canvas.width = $scope.image.width;
            $scope.canvas.height = $scope.image.height;
            
            $scope.ctx.drawImage($scope.image, 0, 0, $scope.canvas.width, $scope.canvas.height);
            
            // Load vignette image
            if ($scope.vignImage.src === ''){
                $scope.vignImage.onload = resetVign;////////////////////////********************
                $scope.vignImage.src = 'images/vignette.jpg';
                
            }

        };

        $scope.imageAdjust = function () {
            $scope.resetImage();
            $scope.imageData = $scope.ctx.getImageData(0, 0, $scope.image.width, $scope.image.height);
            $scope.pixels = $scope.imageData.data;
            $scope.numPixels = $scope.imageData.width * $scope.imageData.height;
            
            brightAdjust();
            contrastAdjust();            
            tint();
            if ($scope.vignette){
                setVignette();
            }
            $scope.ctx.clearRect(0, 0, $scope.canvas.width, $scope.canvas.height);
            $scope.ctx.putImageData($scope.imageData, 0, 0);
        };

        var brightAdjust = function () {
            $scope.brightInt = parseInt($scope.brightness);
            for (var i = 0; i < $scope.numPixels; i++) {
                $scope.pixels[i * 4] += $scope.brightInt;
                $scope.pixels[i * 4 + 1] += $scope.brightInt;
                $scope.pixels[i * 4 + 2] += $scope.brightInt;
            }
        };

        var contrastAdjust = function () {
            $scope.contrastInt = parseFloat($scope.contrast);
            for (var i = 0; i < $scope.numPixels; i++) {
                $scope.pixels[i * 4] = ($scope.pixels[i * 4] - 128) * $scope.contrastInt + 128;
                $scope.pixels[i * 4 + 1] = ($scope.pixels[i * 4 +1] - 128) * $scope.contrastInt + 128;
                $scope.pixels[i * 4 + 2] = ($scope.pixels[i * 4 +2] - 128) * $scope.contrastInt + 128;
            }
        };

//        var colorAdjust = function () {
//            $scope.colorInt = parseInt($scope.color);
//            for (var i = 0; i < $scope.numPixels; i++) {
//                $scope.pixels[i * 4] = 255 - $scope.color.red; // Red
//                $scope.pixels[i * 4 + 1] = 255 - $scope.pixels[i * 4 + 1]; // Green
//                $scope.pixels[i * 4 + 2] = 255 - $scope.pixels[i * 4 + 2]; // Blue
//            }
            
        var resetVign = function(){
            var cn = document.createElement('canvas');
            // Make the cn the same width adnd height as the same image
            cn.width = $scope.image.width;
            cn.height = $scope.image.height;
            
            // Get the context of cn            
            var ctx = cn.getContext('2d');
            
            // Draw the vignette image to ctx
            ctx.drawImage($scope.vignImage, 0, 0, $scope.vignImage.width, $scope.vignImage.height, 0, 0, cn.width, cn.height);
            $scope.vignData = ctx.getImageData(0, 0, cn.width, cn.height); // Get the image data of the vignette
            $scope.vignPixels = $scope.vignData.data; // Get the pixels from imageDATA
            };
    
        var setVignette = function(){
                console.log($scope.vignData.data);
              // Po = Pi + Pv /255;  
                for (var i = 0; i < $scope.numPixels; i++) {
                    $scope.pixels[i * 4] = $scope.pixels[i * 4] * $scope.vignPixels[i * 4] / 255; // Red
                    $scope.pixels[i * 4 + 1] = $scope.pixels[i * 4 + 1] * $scope.vignPixels[i * 4 + 1] / 255; // Green
                    $scope.pixels[i * 4 + 2] = $scope.pixels[i * 4 + 2] * $scope.vignPixels[i * 4 + 2] / 255; // Blue

            }
        };
        
        var tint = function () {
            $scope.redInt = parseInt($scope.color.red);
            $scope.greenInt = parseInt($scope.color.green);
            $scope.blueInt = parseInt($scope.color.blue);
            $scope.strenghtInt = parseInt($scope.strenght);
            for (var i = 0; i < $scope.numPixels; i++) {
                $scope.pixels[i * 4] = $scope.pixels[i * 4] + $scope.color.red * $scope.strenght / 100; // Red
                $scope.pixels[i * 4 + 1] = $scope.pixels[i * 4 + 1] + $scope.color.green * $scope.strenght / 100; // Green
                $scope.pixels[i * 4 + 2] = $scope.pixels[i * 4 + 2] + $scope.color.blue * $scope.strenght / 100; // Blue

            }
        };
    
        $scope.saveImage = function(){
            var imgAsDataUrl = $scope.canvas.toDataURL('images/png');
            $scope.url = imgAsDataUrl;
            
        };
    })
.config(function ($compileProvider){
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|coui|data):/);
});