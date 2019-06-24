<?php

namespace App\Controller\Frontend;

use FOS\RestBundle\Controller\AbstractFOSRestController;

class AuthController extends AbstractFOSRestController {

    public function index()
    {
        return $this->render('frontend/auth/index.html.twig', []);
    }

    public function registration() {
        return $this->render('frontend/auth/index.html.twig', []);
    }
}