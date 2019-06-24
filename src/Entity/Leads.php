<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\LeadsRepository")
 */
class Leads
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Client", inversedBy="leads")
     * @ORM\JoinColumn(nullable=false)
     */
    private $client;

    /**
     * @ORM\Column(type="datetime")
     */
    private $created;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $ip;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $ua;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $p_name;

    /**
     * @ORM\Column(type="date")
     */
    private $p_birth_date;

    /**
     * @ORM\Column(type="time")
     */
    private $p_birth_time;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $p_city_from;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $p_city_now;

    /**
     * @ORM\Column(type="smallint")
     */
    private $p_gender;

    /**
     * @ORM\Column(type="smallint")
     */
    private $status;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Token", inversedBy="leads")
     */
    private $token;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getClient(): ?Client
    {
        return $this->client;
    }

    public function setClient(?Client $client): self
    {
        $this->client = $client;

        return $this;
    }

    public function getCreated(): ?\DateTimeInterface
    {
        return $this->created;
    }

    public function setCreated(\DateTimeInterface $created): self
    {
        $this->created = $created;

        return $this;
    }

    public function getIp(): ?string
    {
        return $this->ip;
    }

    public function setIp(string $ip): self
    {
        $this->ip = $ip;

        return $this;
    }

    public function getUa(): ?string
    {
        return $this->ua;
    }

    public function setUa(string $ua): self
    {
        $this->ua = $ua;

        return $this;
    }

    public function getPName(): ?string
    {
        return $this->p_name;
    }

    public function setPName(string $name): self
    {
        $this->p_name = $name;

        return $this;
    }

    public function getPBirthDate(): ?\DateTimeInterface
    {
        return $this->p_birth_date;
    }

    public function setPBirthDate(\DateTimeInterface $p_birth_date): self
    {
        $this->p_birth_date = $p_birth_date;

        return $this;
    }

    public function getPBirthTime(): ?\DateTimeInterface
    {
        return $this->p_birth_time;
    }

    public function setPBirthTime(\DateTimeInterface $p_birth_time): self
    {
        $this->p_birth_time = $p_birth_time;

        return $this;
    }

    public function getPCityFrom(): ?string
    {
        return $this->p_city_from;
    }

    public function setPCityFrom(string $p_city_from): self
    {
        $this->p_city_from = $p_city_from;

        return $this;
    }

    public function getPCityNow(): ?string
    {
        return $this->p_city_now;
    }

    public function setPCityNow(string $p_city_now): self
    {
        $this->p_city_now = $p_city_now;

        return $this;
    }

    public function getPGender(): ?int
    {
        return $this->p_gender;
    }

    public function setPGender(int $gender): self
    {
        $this->p_gender = $gender;

        return $this;
    }

    public function getStatus(): ?int
    {
        return $this->status;
    }

    public function setStatus(int $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getToken(): ?Token
    {
        return $this->token;
    }

    public function setToken(?Token $token): self
    {
        $this->token = $token;

        return $this;
    }
}
