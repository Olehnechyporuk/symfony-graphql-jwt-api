<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection,
    Doctrine\Common\Collections\Collection,
    Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ClientRepository")
 */
class Client
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="date")
     */
    private $birth_date;

    /**
     * @ORM\Column(type="time")
     */
    private $birth_time;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $city_from;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $city_now;

    /**
     * @ORM\Column(type="smallint")
     */
    private $gender;

    /**
     * @ORM\Column(type="datetime")
     */
    private $reg_time;

    /**
     * @ORM\Column(type="integer")
     */
    private $phone;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $email;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Leads", mappedBy="client")
     */
    private $leads;

    public function __construct()
    {
        $this->leads = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getBirthDate(): ?\DateTimeInterface
    {
        return $this->birth_date;
    }

    public function setBirthDate(\DateTimeInterface $birth_date): self
    {
        $this->birth_date = $birth_date;

        return $this;
    }

    public function getBirthTime(): ?\DateTimeInterface
    {
        return $this->birth_time;
    }

    public function setBirthTime(\DateTimeInterface $birth_time): self
    {
        $this->birth_time = $birth_time;

        return $this;
    }

    public function getCityFrom(): ?string
    {
        return $this->city_from;
    }

    public function setCityFrom(string $city_from): self
    {
        $this->city_from = $city_from;

        return $this;
    }

    public function getCityNow(): ?string
    {
        return $this->city_now;
    }

    public function setCityNow(string $city_now): self
    {
        $this->city_now = $city_now;

        return $this;
    }

    public function getGender(): ?int
    {
        return $this->gender;
    }

    public function setGender(int $gender): self
    {
        $this->gender = $gender;

        return $this;
    }

    public function getRegTime(): ?\DateTimeInterface
    {
        return $this->reg_time;
    }

    public function setRegTime(\DateTimeInterface $reg_time): self
    {
        $this->reg_time = $reg_time;

        return $this;
    }

    public function getPhone(): ?int
    {
        return $this->phone;
    }

    public function setPhone(int $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * @return Collection|Leads[]
     */
    public function getLeads(): Collection
    {
        return $this->leads;
    }

    public function addLead(Leads $lead): self
    {
        if (!$this->leads->contains($lead)) {
            $this->leads[] = $lead;
            $lead->setClient($this);
        }

        return $this;
    }

    public function removeLead(Leads $lead): self
    {
        if ($this->leads->contains($lead)) {
            $this->leads->removeElement($lead);
            // set the owning side to null (unless already changed)
            if ($lead->getClient() === $this) {
                $lead->setClient(null);
            }
        }

        return $this;
    }
}
