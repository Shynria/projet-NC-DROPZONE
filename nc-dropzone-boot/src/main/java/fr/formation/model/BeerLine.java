package fr.formation.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;

import fr.formation.api.Views;

@Entity
@Table(name = "Beer_line")
public class BeerLine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "BEER_LINE_ID")
    @JsonView(Views.Commons.class)
    private int id;

    @ManyToMany
    @JoinTable(
        name = "BEER_LINE_MEMBRE",
        joinColumns = @JoinColumn(name = "ID_BEER_LINE", referencedColumnName = "BEER_LINE_ID"),
		inverseJoinColumns = @JoinColumn(name = "ID_MEMBRE", referencedColumnName = "MEMBRE_ID")
    )
    @JsonView(Views.BeerLine.class)
    private List<Parachutiste> parachutistes;



    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public List<Parachutiste> getParachutistes() {
        return parachutistes;
    }
    public void setParachutistes(List<Parachutiste> parachutistes) {
        this.parachutistes = parachutistes;
    }

    

}
