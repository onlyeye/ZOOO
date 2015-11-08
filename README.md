# ZOOO: A Rotatable Multiple Animatronics Stage

# Introduction
ZOOO is a multi-animatronics stage that can control several animatronics simultaneously. It aims to simplify the procedure of scripting motions for multi-animatronics and enrich interactions between animatronics. It consists of several Branches, rotatable panels, a rotatable base and supporting software.
Branch is a skeleton. When attached to base panel eccentrically, branch can not only drive limb movement of animatronic but also enable displacement of animatronic. Interactions like dancing, fighting, chasing, hide-and-seek can be created through combining displacement of each animatronic.
In supporting software, user can add motion blocks to timeline and edit them. The software also provides abstract 3D models of ZOOO for user to preview.

# Features
Lots of interactions among animatronics can be created in ZOOO. 
Scene change
Puppets appearing or disappearing on the stage
Timeline-based software, available on OS X / Linux / Windows

# Technical Brief
The software is built with node-webkit(nw.js), an app runtime based on Chromium and Node.js with which you can write native apps in HTML and JavaScrip.
We use HTML5 (WebGL, Audio API), Javascript (jQuery & Three.js), node.js to implement the entire system. We build an app(/ZOOO_app/ZOOO.app) with nw.js to access the serial port to communicate with the Arduino and connect to the servo controller by Arduino. So ZOOO app sends the command to the Arduino controller, then build an Arduino file (/Arduino/ZOOOToArduinoToUSC32.ino) to analyze the command and send the correct commands to the servo controller. 

The hardware consists of three Branches, three rotatable panels, one rotatable base, one Arduino Leonardo board, one servo control board and up to 23 servos.

# How To Use

We provide a very simple way to create a multi-animatronics drama show！
——————————————————————————————
5 Simple steps to use ZOOO to create your story!

Create your Story
Create actions in our software
Insert sounds with our software
Connect to our hardware
Put on sceneries made by yourself！
——————————————————————————————
Our software consists of 4 parts
Control Panel: includes Action Dashboard, Sound Lib and File Lib: to set motions of hardwares, insert sound files and import saved files
Preview Windows: top view, front view and skull view provide a full-range preview.
Timeline Dashboard: Timeline allows user to add, drag, stretch and remove the action or sound blocks
Editor Buttons

Seven buttons includs core edit functions: connect hardware/preview/play/pause/stop/save/clean up
——————————————————————————————
In the app(software), to let users easy to make a story, we create the timeline mode, so the actions and sounds of the story can be flexible added, edited and removed. As well by the WebGL, we make a preview function, so people can preview the animatronics’ position and movement by top and font views. So you can preview the story without connecting the hardware, and play the story with connecting. In addition, the app has the exporting and importing functions, so the users can save the story and specific phases temporarily.

# Authors
Qiuyu Lu (http://www.x-studio.org.cn/~卢秋宇)
X-Studio, Academy of Art & Design, Tsinghua University
Team Captain, Fabrication (Mechanic design & modeling, panel beating, wood board laser cutting)，Hardware (assembling and testing)

Yejun Liu
Research Group of Human Computer Speech Interaction, Department of Computer Science and Technology, Tsinghua University
UI Design, App Design, Software(HTML, Javascript, nw.js),  Graphics(WebGL)

Chengpeng Mao(http://mcpportfolio.aliapp.com/)
Academy of Art & Design, Tsinghua University
Software Architecture(Communication between hardware and software), Web-Server(node.js), Hardware(Arduino,Servo Controller,Refine)


Qiuheqi Zhong (http://www.x-studio.org.cn/~钟秋何琦)
X-Studio, Tsinghua University
Flow&interaction design, structure design and graphic design.


# Advisor
Haipeng Mi (http://haipengmi.com)

