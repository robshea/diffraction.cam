---
title: About
date: 2024-01-13 09:00:00:00 -0500
permalink: /about/
layout: single
published: true
---

## What is diffraction?

> Diffraction is a property of photographic systems that affects the sharpness of your images. At the highest f-stop values of a camera lens, diffraction will cause softness in your photos. When seeking the sharpest image in visible light photography, you may wish to avoid a couple of stops of the highest f-stop values on your lens. For example, if the maximum f-stop number on your lens is ƒ/22, you might avoid ƒ/22 and ƒ/16, which will soften your image due to diffraction. In this example, an f-stop value of ƒ/11 produces a sharp image without diffraction.
> 
> In infrared photography, the impact of diffraction is more significant. With the same lens, you might also avoid using ƒ/11 and ƒ/8. The sharpest f-stop could be ƒ/5.6. You can see how dramatically diffraction impacts the settings you choose. This can be limiting, or it can be used for creative effect.

_Excerpt from [Color Doesn’t Exist: A Practical Guide to Infrared Photography](https://www.colordoesntexist.com/)_

## What is the diffraction ratio?

The diffraction ratio is compares the diameter of an Airy disk produced by a particular specific wavelength of light passing through a specific lens aperture to a camera sensor's pixel pitch.

```jsx
diffraction ratio = Airy disk diameter / pixel pitch
```

A diffraction ratio lower than 3 will not result in visible diffraction. A diffraction ratio of 3 to 4.5 results in mild visible diffraction. A diffraction ratio greater than 4.5 will visibly impact image sharpness.

The diffraction ratio values were compared with visual diffraction tests for [APS-C](https://blog.robsheaphotography.com/2020/09/15/diffraction-in-infrared-photography.html) and [medium format](https://blog.robsheaphotography.com/2022/07/10/which-f-stop-sharpest-diffraction-gfx-50s.html) sensors to determine values where visual diffraction appears.

## What is an Airy Disk?

> All photons coming from a single point on your subject do not produce a single point of light on your camera's sensor. Due to diffraction, each photon bends in a slightly different direction when passing through the aperture. Photons strike the sensor in a disk shape, surrounded by concentric light rings. This disk is called an *Airy disk*.

_Excerpt from [Color Doesn’t Exist: A Practical Guide to Infrared Photography](https://www.colordoesntexist.com/)_

![Airy-pattern.svg](https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Airy-pattern.svg/1024px-Airy-pattern.svg.png)
_Image credit: [Sakurambo](https://commons.wikimedia.org/wiki/File:Airy-pattern.svg)_

## How do you calculate the size of an Airy disk?

This formula is used to calculate the size of an Airy disk.

$$
Δx = 1.22ƛN
$$

Δx is the radius of the Airy disk from the center to the first null. The first null is the gap between the central dot and the first ring. Double this value to get the diameter of the Airy disk from null to null.

ƛ is the wavelength of the light.

*N* is the ƒ-number or ƒ-stop of the imaging optics. ƒ-number is the lens focal length divided by the lens aperture diameter.

This gives us the following formula.

```jsx
Airy disk diameter = 2.44 * wavelength * ƒ-number
```

## Why compare to pixel pitch?

Pixel pitch is the measurement from the center of a pixel to the center of an adjacent pixel. Pixel pitch is the best proxy that we have for sensor pixel diameter, since pixels are rectangular, and pixel sizes are not typically published.

Wavelength is measured in nanometers (nm). This results in the Airy disk size being measured in nanometers. Pixel pitch is measured in microns (μm). Pixel pitch values are multiplied 1,000 to convert from microns to nanometers.

## Does demosaicing affect diffraction?

In testing diffraction on both Bayer and X-Trans sensors, the diffraction ratio produces similar results for the same value regardless of demosaicing type.

## Additional Reading

- [Diffraction-limited imaging](https://en.wikipedia.org/wiki/Diffraction#Diffraction-limited_imaging)
- [Airy disk](https://en.wikipedia.org/wiki/Airy_disk)
- [Demosaicing](https://en.wikipedia.org/wiki/Demosaicing)