<?php


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class ApiController extends Controller
{
    public function index()
    {
        return $this->render(':frontend/auth:index.html.twig', []);
    }
}