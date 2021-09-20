package fr.formation.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Saut")
public class Saut {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "SAUT_ID", nullable = false)
    private int id;

    @ManyToMany
    @Column(name = "LISTE_PARTICIPANTS", nullable = false)
    private List<Parachutiste> parachutiste;

    @Column(name = "ATTERRISSAGE_RATE")
    private boolean isOutsideZone;

    @ManyToOne
    @JoinColumn(name = "SAUT_VOL_ID")
    private Vol vol;

    @Column(name = "SAUT_HAUTEUR", nullable = false)
    private Hauteur hauteur;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public List<Parachutiste> getParachutiste() {
        return parachutiste;
    }

    public void setParachutiste(List<Parachutiste> parachutiste) {
        this.parachutiste = parachutiste;
    }

    public boolean isOutsideZone() {
        return isOutsideZone;
    }

    public void setOutsideZone(boolean isOutsideZone) {
        this.isOutsideZone = isOutsideZone;
    }

    public Vol getVol() {
        return vol;
    }

    public void setVol(Vol vol) {
        this.vol = vol;
    }

    public Hauteur getHauteur() {
        return hauteur;
    }

    public void setHauteur(Hauteur hauteur) {
        this.hauteur = hauteur;
    }

    
    
}
